const { Pool } = require('pg');

const conexion = async (settings) => {
    const pool = new Pool(settings);
    try {
        const client = await pool.connect();
        return client;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = conexion;