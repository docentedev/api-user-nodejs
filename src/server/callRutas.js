const colors = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",
    FgBlack: "\x1b[30m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgBlue: "\x1b[34m",
}

const log = (method, ruta, isStartswith, req) => {
    console.log(`${colors.FgBlue} ${method} ${colors.Reset} ${ruta} isStartswith=${isStartswith} \x1b[31m url=${colors.Underscore}http://localhost:3000${req.url}\x1b[0m`);
}

const callRutas = (req, res, client) => {
    return (method, ruta, callaback, isStartswith = false) => {
        if (isStartswith) {
            if (req.method === method && req.url.startsWith(ruta)) {
                log(method, ruta, isStartswith, req)
                callaback(req, res, client);
            }
        } else {
            if (req.method === method && req.url === ruta) {
                log(method, ruta, isStartswith, req)
                callaback(req, res, client);
            }
        }
    }
}

module.exports = callRutas;