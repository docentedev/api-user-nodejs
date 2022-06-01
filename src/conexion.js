const { Pool } = require('pg');

const conexion = async () => {
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'banco_bci',
        password: '',
        port: 5432,
    });
    try {
        const client = await pool.connect();
        return client;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = conexion;