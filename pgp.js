const wa = require('@open-wa/wa-automate');

// configure apis
const qt = require('./src/api_questions')
const constants = require('./constants/constants')
const utils = require('./utils/utils')
const object = require('./src/obj')
const config = require('./config/config_create')
const owner = require('./users/owners/owner.json')

//firebase

const utilsConfig = require('./service/api')
let utilsConf = new utilsConfig.Api()

const apiFirestore = require('./service/firebase_services')
let FirebaseService = new apiFirestore.FirebaseServices()


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
        if (message.author !== '557488700196@c.us') return;

        let formatTime, timestamp;

        const isBlockInit = await api.isInitBlock(message.author)
        const isBlocked = await api.isBlocked(message.author)

        if (isBlocked) return;

        await utilsConf.formatTime().then(async T => formatTime = T)
        await utilsConf.formatTimeStamp(formatTime).then(async TS => timestamp = TS);

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
                        await FirebaseService.addLogs(formatTime, 'INFO', `Arquivo de log Solocitado por ${message.author}`, '!gelog');
                        return;
                    }
                }
            } catch (err) {
                await bot.sendText(message.from, err)
                await FirebaseService.addLogs(formatTime, 'ERROR', err, '!getlog');
                return;
            }
        }

        if (message.body.startsWith('!votes')) {
            for (let i = 0; i < owner.length; i++) {
                if (message.author === owner[i]) {
                    await bot.sendFile(message.from, 'data/db/votes.json', 'votes.json', '• Arquivo de votos do PGP')
                    await FirebaseService.addLogs(formatTime, 'INFO', `Arquivo de votos Solocitado por ${message.author}`, '!getvote');
                    return;
                }
            }
        }

        if (message.body.startsWith('!opinion')) {
            for (let i = 0; i < owner.length; i++) {
                if (message.author === owner[i]) {
                    await bot.sendFile(message.from, 'data/opiniao/opiniao_msg.json', 'opiniao_msg.json', '• Arquivo de opiniões do PGP')
                    await api.saveLogs(`Arquivo de opinião Solocitado por ${message.author}`, formatTime, 'INFO', '!getopinion')
                    return;
                }
            }
        }

        // save user interaction
        await FirebaseService.addParticipant(message.notifyName, message.author, message.sender.profilePicThumbObj.eurl, formatTime, timestamp)
            .then(async obj => {
                if (obj != undefined) {
                    console.log('Registrado')
                    return;
                }
            })

        await api.registerUser(message.notifyName, message.author, message.sender.profilePicThumbObj.eurl)
            .then(async (obj) => {
                if (obj !== undefined) {
                    await FirebaseService.addLogs(formatTime, 'INFO', obj, 'registerUser()');
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
                                await FirebaseService.addLogs(formatTime, 'INFO', 'Contact Blocked', 'Send themes initial');
                                return;
                            }
                            await FirebaseService.addLogs(formatTime, 'ERRO', boolOrError, 'Send themes initial');
                            return;
                        })
                        questions.forEach(async element => {
                            let listToString = element.themes.toString()
                            await bot.simulateTyping(message.from, true)
                            await bot.sendText(message.from, `${choose}${listToString.replace(/,/g, '')}`)
                        });
                    })
                } catch (err) {
                    await FirebaseService.addLogs(formatTime, 'ERRO', err, 'Send themes initial...');
                    return;
                }
            }
        }

        if (message.body.length >= 35) {
            await FirebaseService.addOpinion(message.author, message.body)
                .then(async event => {
                    if (event !== undefined) {
                        await bot.sendText(message.from, event)
                        return;
                    }
                }).catch(async _ => {
                    await FirebaseService.addLogs(formatTime, 'ERRO', err, 'registerOpiniao_()');
                    return;
                });
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
                await FirebaseService.addLogs(formatTime, 'ERRO', err, 'Send themes');
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
                    await FirebaseService.addLogs(formatTime, 'ERRO', err, 'Send Subthemes');
                    return;
                }
            }
        })
    });
}