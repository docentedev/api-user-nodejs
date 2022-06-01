const http = require('http');
const getAllUser = require('./rutas/getAllUser');
const getUserByName = require('./rutas/getUserByName');
const conexion = require('./conexion');

const main = async () => {
    try {
        const client = await conexion();
        const server = http.createServer((req, res) => {
            if (req.method === 'GET' && req.url === '/users') {
                getAllUser(req, res, client);
            }
            if (req.method === 'GET' && req.url.startsWith('/users?')) {
                getUserByName(req, res, client);
            }
        })

        server.listen(3000, () => {
            console.log('Server running at http://localhost:3000/');
        });
    } catch (error) {
        console.log(error);
    }
}

main()