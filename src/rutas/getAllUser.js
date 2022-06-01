const getAllUser = async (req, res) => {
    try {
        const users = [{
            id: 1,
            username: 'juan',
            email: 'j@mail.cl',
        }, {
            id: 2,
            username: 'pedrito',
            email: 'pedrito@mail.cl',
        }];
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