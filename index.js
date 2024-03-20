Sure, here's a basic example of how you can control an LED connected to a NodeMCU using Socket.io in a Node.js server:

Node.js server code (`server.js`):

```javascript
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { Board, Led } = require('johnny-five');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const board = new Board({ port: 'COM3' }); // Change 'COM3' to your NodeMCU port

board.on('ready', () => {
  const led = new Led(2); // Pin 2 for the LED
  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('led:on', () => {
      led.on();
      console.log('LED ON');
    });

    socket.on('led:off', () => {
      led.off();
      console.log('LED OFF');
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

Client-side code (`index.html`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LED Control</title>
</head>
<body>
  <button id="btnOn">Turn LED ON</button>
  <button id="btnOff">Turn LED OFF</button>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.2/socket.io.js"></script>
  <script>
    const socket = io();

    document.getElementById('btnOn').addEventListener('click', () => {
      socket.emit('led:on');
    });

    document.getElementById('btnOff').addEventListener('click', () => {
      socket.emit('led:off');
    });
  </script>
</body>
</html>
```

Make sure you have the required libraries installed:
- `express`
- `http`
- `socket.io`
- `johnny-five`

You can install them via npm:

```
npm install express http socket.io johnny-five
```

This code assumes you have a NodeMCU connected to your computer via USB, with an LED connected to pin D2. Adjust the port and pin number accordingly.