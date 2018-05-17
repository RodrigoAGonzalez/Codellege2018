const server = require('net').createServer();
let counter = 0;
let sockets = {};

function timestamp() {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}

server.on('connection', socket => {
  socket.id = counter++;

  console.log('Client connected');

  socket.on('data', data => {
    Object.entries(sockets).forEach(([key, cs]) => {
      cs.write(`User ${timestamp()}: `);
      cs.write(data);
    });
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(8000, () => console.log('Server bound'));
