const url = require('url');
const selectUserByName = require('../consultas/selectUserByName');

const getUserByName = async (req, res, client) => {
    try {
        const query = url.parse(req.url, true).query;
        const name = query.name || '';
        const user = await selectUserByName(name, client);
        if (user) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                message: `User (${name}) Not Found`
            }));
        }

    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: error
        }));
    }
}

module.exports = getUserByName;