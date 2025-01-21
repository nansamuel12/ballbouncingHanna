const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

let clients = []; // Array to store connected clients

// Fix: Use wss instead of ws for event listeners
wss.on('connection', function connection(ws) {
  console.log('A client connected');
  clients.push(ws);

  ws.on('message', function incoming(data) {
    console.log('received:', data);

    // Forward messages from the frontend to all connected clients
    broadcast(data);
  });
});

// Broadcast messages to all connected clients
function broadcast(message) {
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

// Handle messages received from the Telegram Bot (assuming you're sending commands to the server from your bot)
wss.on('message', (data) => {
  const command = JSON.parse(data);

  if (command.command === 'speedup') {
    // Broadcast the speedup command to all clients
    broadcast(JSON.stringify({ command: 'speedup' }));
  } else if (command.command === 'slowdown') {
    // Broadcast the slowdown command to all clients
    broadcast(JSON.stringify({ command: 'slowdown' }));
  } else if (command.command === 'reverse') {
    // Broadcast the reverse command to all clients
    broadcast(JSON.stringify({ command: 'reverse' }));
  }
});