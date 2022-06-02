const http = require('http');
const callRutas = require('./callRutas');

const main = async (PORT, servicios, client) => {
    try {
        const server = http.createServer((req, res) => {
            const callRuta = callRutas(req, res, client);
            Object.keys(servicios).forEach(ruta => {
                callRuta(servicios[ruta].method, ruta, servicios[ruta].callback, servicios[ruta].isStartsWith);
            })
        })

        server.listen(PORT, () => {
            console.log(`\x1b[33m Server running at http://localhost:${PORT}/ \x1b[0m`);
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = main;