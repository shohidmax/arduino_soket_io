const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { Board, Led } = require('johnny-five');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

const board = new Board();

board.on('ready', () => {
  const led = new Led(2); // Assuming the LED is connected to pin 2 of the NodeMCU

  io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('toggle', () => {
      led.toggle();
      io.emit('status', led.isOn ? 'on' : 'off');
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
});
