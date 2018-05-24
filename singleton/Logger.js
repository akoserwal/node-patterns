class Logger {

    constructor() {
        this.logs = [];
    }

    log(msg) {
        const timestamp = new Date().toISOString();
        this.logs.push({ msg, timestamp });
        console.log(`${timestamp} - ${msg}`);
    }

}

module.exports = new Logger();