const getUserByName = async (req, res) => {
    try {
        const user = {
            id: 1,
            username: 'juan',
            email: 'j@mail.cl',
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(user));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: error
        }));
    }
}

module.exports = getUserByName;