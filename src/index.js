require('dotenv').config()
const getAllUser = require('./rutas/getAllUser');
const getUserByName = require('./rutas/getUserByName');
const conexion = require('./server/conexion');
const server = require('./server')

const dbSettings = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
}

const program = async () => {
    try {
        const client = await conexion(dbSettings);
        const servicios = {
            '/users': {
                method: 'GET',
                callback: getAllUser,
                isStartsWith: false,
            },
            '/users?': {
                method: 'GET',
                callback: getUserByName,
                isStartsWith: true,
            }
        }
        server(process.env.PORT, servicios, client)
    } catch (error) {
        console.log(error);
    }
}

program()