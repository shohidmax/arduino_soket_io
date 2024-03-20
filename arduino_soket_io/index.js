const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public')); // To serve your web client files

io.on('/connection', (socket) => {
  console.log('Client connected');

  socket.on('togglePC', () => {
	io.emit('pcPower'); // Broadcast to all clients to trigger NodeMCU
  });
});

http.listen(3009, () => {
  console.log('Server listening on port 3009');
});
