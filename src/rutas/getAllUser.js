const selectAllUser = require('../consultas/selectAllUser');

const getAllUser = async (req, res, client) => {
    try {
        const users = await selectAllUser(client);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: error
        }));
    }
}

module.exports = getAllUser;