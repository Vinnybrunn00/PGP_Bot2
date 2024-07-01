
const app = require('firebase-admin/app');
const firestore = require('firebase-admin/firestore');

const setCredential = require('../config/firebase_conf.json');

app.initializeApp({
    credential: app.cert(setCredential)
});

class FirebaseServices {
    constructor() {
        this.firestore = firestore.getFirestore()
    }

    async addLogs(time, typeLog, event, func) {
        try {
            let timer = time.replace('ás', '').replace(' ', '')
            let logFormats = `${timer}: ${typeLog} - [log] ➜ ${event} => ${func}`
            await this.firestore.collection('logs').doc('8z9HIUkFVoPwODFVveTX').update({
                arraylogs: firestore.FieldValue.arrayUnion(logFormats)
            });
        } catch (err) {
            console.log(err);
        }
    }

    async addOpinion(contact, opn) {
        let _response;
        try {
            let snapshot = await this.firestore.collection('register').get();
            snapshot.docs.forEach(async element => {
                let data = element.data()
                if (contact === data.contact) {
                    await this.firestore.collection('register').doc(element.id).collection('opinion').doc().set({
                        'text': opn
                    }).then(async _ => {
                        await this.firestore.collection('register').doc(element.id).update({
                            'isOpn': true
                        })
                        _response = 'Obrigado por sua opinião! ✅'
                        return;
                    });
                }
            });
            return _response;
        } catch (err) {
            throw err
        }
    }

    async addParticipant(name, contact, photo, time, timestamp) {
        let isRegister;

        let register = await this.firestore.collection('register').get()
        register.docs.forEach(async element => {
            let data = element.data();
            if (contact === data.contact) {
                isRegister = true
                return;
            }
        });
        console.log(isRegister)
        if (!isRegister) {
            await this.firestore.collection('register').doc().set({
                'name': name,
                'contact': contact,
                'photo': photo || null,
                'time': time,
                'timestamp': timestamp,
            }).then(_ => {
                isRegister = null;
            }).catch(async err => {
                // config logs
            });
        }
    }
}

exports.FirebaseServices = FirebaseServices