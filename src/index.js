const http = require('http');
const getAllUser = require('./rutas/getAllUser');
const getUserByName = require('./rutas/getUserByName');

const server = http.createServer((req, res) => {
  /// res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.end('Hello World\n');
  if (req.method === 'GET' && req.url === '/users') {
    getAllUser(req, res);
  }
  if (req.method === 'GET' && req.url.startsWith('/users?')) {
    getUserByName(req, res);
  }
})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});