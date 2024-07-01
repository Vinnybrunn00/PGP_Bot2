
class Api {
    constructor() {
        this.data = new Date()
    }

    async formatTime() {
        let getMonth = this.data.getMonth() + 1
        let dataFormats = `${this.data.getDate() < 10 ? '0' + this.data.getDate() : this.data.getDate()}/${this.data.getMonth() < 10 ? '0' + getMonth : getMonth}/${this.data.getFullYear()}`
        let hourFormats = `${this.data.getHours() < 10 ? '0' + this.data.getHours() : this.data.getHours()}:${this.data.getMinutes() < 10 ? '0' + this.data.getMinutes() : this.data.getMinutes()}:${this.data.getSeconds() < 10 ? '0' + this.data.getSeconds() : this.data.getSeconds()}`
        return dataFormats + ' ás ' + hourFormats
    }

    async formatTimeStamp(date) {
        let newDate = date.replace('ás', '').replace(' ', '');
        return this.data.getTime(newDate)
    }

}

exports.Api = Api;
