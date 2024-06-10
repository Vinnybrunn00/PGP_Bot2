const constants = require('../constants/constants')
const path = require('path')
const fs = require('fs').promises;
const pathAbs = path.resolve(__dirname, '../users/black_list/black_list.json')
const pathLog = path.resolve(__dirname, '../logs/logfile.log')
const pathRegister = path.resolve(__dirname, '../users/register/register.json')
const pathOpiniao = path.resolve(__dirname, '../data/opiniao/opiniao_msg.json')
const pathVotes = path.resolve(__dirname, '../data/db/votes.json')
const pathBlockInit = path.resolve(__dirname, '../users/block_initial/block.json')
const boas_vindas = constants.boasVindas

class ApiUtils {
    constructor() { }

    async registerOpiniao_(name, contact, photo, opiniao) {
        try {
            let readFile = await fs.readFile(pathOpiniao)
            const registerOpt = JSON.parse(readFile)
            for (let conct of registerOpt) {
                if (conct.contact === contact) {
                    return '* Você já nos enviou sua opinião, obrigado por participar! 😅'
                }
            }
            registerOpt.push(
                {
                    name: name,
                    contact: contact,
                    photo: photo,
                    opiniao: opiniao,
                }
            );
            await fs.writeFile(pathOpiniao, JSON.stringify(registerOpt))
            await this.saveLogs('- Opinião registrada', 'INFO', 'registerOpiniao()')
            return 'Obrigado por sua opinião! ✅';
        } catch (err) {
            await this.saveLogs(err, 'ERROR', 'registerOpiniao()')
            return '* Ocorreu um erro interno, por favor tente mais tarde ❌'
        }
    }

    sendMsgTheme(theme, vote) {
        let exemple;
        if (vote.length === 1) exemple = `*Exemplo*: Envie *${vote}.1* para o tema desejado`;
        if (vote.length === 3) exemple = `*Exemplo*: Envie *${vote}.3* para o tema desejado`;
        if (vote.length === 5) exemple = `*Exemplo*: Envie *${vote}.2* para o tema desejado`;
        if (vote.length === 6) exemple = `*Exemplo*: Envie *${vote}.1* para o tema desejado`;
        return `Tema Escolhido: *${theme}*\n\n➜ Agora escolha um dos subtemas sobre *${theme}* abaixo. 👇\n\n${exemple}`
    }

    async blockUser(user) {
        let readfile = await fs.readFile(pathAbs)
        try {
            const blackList = JSON.parse(readfile)
            for (let bl of blackList) {
                if (bl === user) {
                    return;
                }
            }
            blackList.push(user)
            await this.saveLogs(`${user} -> Bloqueado`, 'INFO', 'blockUser()')
            await fs.writeFile(pathAbs, JSON.stringify(blackList))
            return;
        } catch (err) {
            await this.saveLogs(err, 'ERROR', 'blockUser()')
            return;
        }
    }

    async sendError(msg, chatId, bot) {
        try {
            if (msg !== undefined && msg !== 'undefined') {
                await bot.sendText(chatId, msg)
                return;
            }
        } catch (err) {
            await this.saveLogs(err, 'ERROR', 'sendError()')
            return;
        }
    }

    async votesResolve(theme) {
        try {
            const readFile = await fs.readFile(pathVotes)
            const arrayVotes = JSON.parse(readFile)
            arrayVotes.push(theme)
            await this.saveLogs(`${theme} escolhido...`, 'INFO', 'votesResolve()')
            await fs.writeFile(pathVotes, JSON.stringify(arrayVotes))
            return;
        } catch (err) {
            await this.saveLogs(err, 'ERROR', 'votesResolve()')
            return '* Erro inesperado, tente novamente! ❌';
        }
    }

    async isInitBlock(contactBlock) {
        try {
            const readFile = await fs.readFile(pathBlockInit)
            const blockInit = JSON.parse(readFile)
            return blockInit.includes(contactBlock)
        } catch (err) {
            await this.saveLogs(err, 'ERROR', 'isInitBlock()')
            return false
        }
    }

    async isBlocked(user) {
        try {
            let readfile = await fs.readFile(pathAbs)
            const blackList = JSON.parse(readfile)
            return blackList.includes(user)
        } catch (err) {
            await this.saveLogs(err, 'ERROR', 'isBlocked()')
            return;
        }
    }

    async blockInitial(contact) {
        if (contact === "557498196426@c.us") return;
        if (contact !== null) {
            try {
                const readFile = await fs.readFile(pathBlockInit)
                const initMsgBlock = JSON.parse(readFile)
                initMsgBlock.push(contact)
                await fs.writeFile(pathBlockInit, JSON.stringify(initMsgBlock))
                return true;
            } catch (err) {
                return err
            }
        }
    }

    async themesQuestions(theme, query, vote, questions, chatId, messageId, bot) {
        let content = []
        console.log(theme)
        let mpdTheme = theme.replace(/_/g, ' ')
        questions.forEach(async element => {
            try {
                for (let i = 0; i < element[query].length; i++) {
                    for (let j of element[query][i][theme]) {
                        content.push(j)
                    }
                }
                content = content.toString()
                await bot.reply(chatId, `${vote.length > 7 ? '' : this.sendMsgTheme(mpdTheme, vote)}\n\n${content.replace(/,/g, '')}`, messageId)
                return;
            } catch (err) {
                await this.saveLogs(err, 'ERROR', 'themesQuestions()')
                return 'Erro inesperado, tente novamente.';
            }
        })
        return theme;
    }

    async saveLogs(args, timers, type, func) {
        try {
            if (args !== undefined && type !== undefined) {
                await fs.writeFile(pathLog, `${timers || await this.hourLog()}: [${type}] ${args} => ${func} ` + '\n', { flag: 'a' })
                return;
            }
        } catch (err) {
            throw err;
        }
    }

    async registerUser(name, contact, photo) {
        if (name !== undefined && contact !== undefined && photo !== undefined) {
            try {
                let reg = await fs.readFile(pathRegister)
                const register = JSON.parse(reg)
                for (let conct of register) {
                    if (conct.contact === contact) {
                        return;
                    }
                }
                let objUser = {
                    name: name,
                    contact: contact,
                    photo: photo
                }
                register.push(objUser)
                await fs.writeFile(pathRegister, JSON.stringify(register))
                await this.saveLogs(`"${name}" Registrado!`, 'INFO', 'registerUser()')
                return objUser.name + objUser.contact
            } catch (err) {
                await this.saveLogs(err, 'ERROR', 'registerUser()')
                return;
            }
        }
    }

    async hourLog() {
        const getDate = new Date()
        return `${getDate.getFullYear()}.${getDate.getMonth() >= 10 ? getDate.getMonth() + 1 : `0${getDate.getMonth() + 1}`}.${getDate.getDate() >= 10 ? getDate.getDate() : `0${getDate.getDate()}`} ${getDate.getHours() >= 10 ? getDate.getHours() : `0${getDate.getHours()}`}.${getDate.getMinutes() >= 10 ? getDate.getMinutes() : `0${getDate.getMinutes()}`}.${getDate.getSeconds() >= 10 ? getDate.getSeconds() : `0${getDate.getSeconds()}`}`
    }

    getHours(person) {
        const time = new Date()
        if (time >= 1 && time <= 12) {
            return `Olá * ${person}*, Bom dia\n\n${boas_vindas} !`
        } else if (time >= 13 && time <= 18) {
            return `Olá * ${person}*, Boa Tarde\n\n${boas_vindas} !`
        } else {
            return `Olá * ${person}*, Boa Noite\n\n${boas_vindas} !`
        }
    }
}

exports.ApiUtils = ApiUtils