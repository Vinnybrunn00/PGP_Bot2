

const test = require('../service/api')

let xux = new test.Api()








async function resolveData(timers) {
    let newTime = timers.replace('ás', '').replace(' ', '');
    const data = new Date()

    console.log(data.getTime(newTime), newTime)
    return data.getTime(newTime)

}

async function main() {
    const data = new Date()
    let getMonth = data.getMonth() + 1
    let dataFormats = `${data.getDate() < 10 ? '0' + data.getDate() : data.getDate()}/${data.getMonth() < 10 ? '0' + getMonth : getMonth}/${data.getFullYear()}`
    console.log(dataFormats)
}
main()