const wa = require('@open-wa/wa-automate');

// configure apis
const qt = require('./src/api_questions')
const constants = require('./constants/constants')
const utils = require('./utils/utils')
const object = require('./src/obj')
const config = require('./config/config_create')
const owner = require('./users/owners/owner.json')

// instance api
const questions = qt.questoes
const obj = object.objFunc
const create = config.create
const choose = constants.choose
const newSendTemes = constants.newSendThemes;
let api = new utils.ApiUtils()

wa.create(create).then(bot => start(bot));

function start(bot) {
    bot.onMessage(async message => {
        if (message.chat.isGroup) return;

        let timers;

        const isBlockInit = await api.isInitBlock(message.author)
        const isBlocked = await api.isBlocked(message.author)

        if (isBlocked) return;

        await api.hourLog().then(async T => timers = T)

        // block user
        const impr = constants.msgImproprias
        for (let i = 0; i < impr.length; i++) {
            if (message.body.includes(impr[i])) {
                await api.blockUser(message.author)
                return;
            }
        }

        // send logfile
        if (message.body.startsWith('!getlog')) {
            try {
                for (let i = 0; i < owner.length; i++) {
                    if (message.author === owner[i]) {
                        await bot.sendFile(message.from, 'logs/logfile.log', 'logfile.log', '• Arquivo de logs de eventos do bot!')
                        await api.saveLogs(`Arquivo de log Solocitado por ${message.author}`, timers, 'INFO', '!getlog')
                        return;
                    }
                }
            } catch (err) {
                await bot.sendText(message.from, err)
                await api.saveLogs(err, timers, 'ERROR', '!getlog')
                return;
            }
        }

        if (message.body.startsWith('!votes')) {
            for (let i = 0; i < owner.length; i++) {
                if (message.author === owner[i]) {
                    await bot.sendFile(message.from, 'data/db/votes.json', 'votes.json', '• Arquivo de votos do PGP')
                    await api.saveLogs(`Arquivo de votos Solocitado por ${message.author}`, timers, 'INFO', '!getvote')
                    return;
                }
            }
        }

        if (message.body.startsWith('!opinion')) {
            for (let i = 0; i < owner.length; i++) {
                if (message.author === owner[i]) {
                    await bot.sendFile(message.from, 'data/opiniao/opiniao_msg.json', 'opiniao_msg.json', '• Arquivo de opiniões do PGP')
                    await api.saveLogs(`Arquivo de opinião Solocitado por ${message.author}`, timers, 'INFO', '!getopinion')
                    return;
                }
            }
        }

        // save user interaction
        await api.registerUser(message.notifyName, message.author, message.sender.profilePicThumbObj.eurl)
            .then(async (obj) => {
                if (obj !== undefined) {
                    await api.saveLogs(obj, timers, 'INFO', 'save user interaction')
                    return;
                }
            });

        // send themes initial with messages inicializate
        for (let msg of constants.initMsg) {
            if (message.body.toLowerCase() === msg) {
                if (isBlockInit) return;
                try {
                    await bot.sendText(message.chat.id, api.getHours(
                        message.notifyName
                    )).then(async () => {
                        await api.blockInitial(message.author).then(async boolOrError => {
                            if (boolOrError) {
                                await api.saveLogs('Contact Blocked', timers, 'INFO', 'send themes initial')
                                return;
                            }
                            await api.saveLogs(boolOrError, timers, 'ERROR', 'send themes initial')
                            return;
                        })
                        questions.forEach(async element => {
                            let listToString = element.themes.toString()
                            await bot.simulateTyping(message.from, true)
                            await bot.sendText(message.from, `${choose}${listToString.replace(/,/g, '')}`)
                        });
                    })
                } catch (err) {
                    await api.saveLogs(err, timers, 'ERROR', 'send themes initial...')
                    return;
                }
            }
        }

        if (message.body.length >= 35) {
            try {
                await api.registerOpiniao_(message.notifyName, message.author, message.sender.profilePicThumbObj.eurl, message.body)
                    .then(async (event) => {
                        if (event !== undefined) {
                            await bot.sendText(message.from, event)
                            return;
                        }
                        await bot.reply(message.from, event, message.id)
                        return;
                    })
            } catch (err) {
                await api.saveLogs(err, timers, 'ERROR', 'opiniao')
                return;
            }
        }

        // send themes
        if (message.body.toLowerCase() === 'temas') {
            try {
                let themes = [];
                questions.forEach(async element => {
                    for (let temas of element.themes) {
                        themes.push(temas)
                    }
                    themes = themes.toString()
                    await bot.reply(message.from, `${newSendTemes}${themes.replace(/,/g, '')}`, message.id)
                    return;
                })
            } catch (err) {
                await api.saveLogs(err, timers, 'ERROR', 'send themes')
                return
            }
        }

        // send Subthemes
        const keys = Object.keys(obj)
        keys.forEach(async element => {
            if (message.body === element) {
                try {
                    await api.themesQuestions(
                        obj[element][0], obj[element][1], element, questions, message.from, message.id, bot
                    ).then(async (theme) => {
                        if (theme !== null) {
                            await api.votesResolve(theme)
                                .then(async msg => api.sendError(msg, message.from, bot))
                            return;
                        }
                    })
                } catch (err) {
                    await api.saveLogs(err, timers, 'ERROR', 'send Subthemes')
                    return;
                }
            }
        })
    });
}
// 557488562578-1624412670@g.us