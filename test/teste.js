

const test = require('../service/api')

let xux = new test.Api()








async function resolveData(timers) {
    let newTime = timers.replace('ás', '').replace(' ', '');
    const data = new Date()

    console.log(data.getTime(newTime), newTime)
    return data.getTime(newTime)

}

async function main() {
    let timers;

    await xux.formatTime().then(async T => timers = T)
    await resolveData(timers).then(date => {
        console.log(date)
        let ti = new Date(date)
        console.log(ti)
    });
}
main()