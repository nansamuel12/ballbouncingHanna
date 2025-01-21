require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

// Initialize WebSocket outside the command handlers
const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:8080');

// Error handling for WebSocket connection (optional but recommended)
ws.on('open', () => {
  console.log('WebSocket connection opened');
});

ws.on('error', (error) => {
  console.error('WebSocket Error:', error);
});

// Handle '/start' command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome to the Bouncing Ball Gameeee! Use /start to begin.');
  ws.send(JSON.stringify({ command: 'start' }));
});

//register
bot.onText(/\/register/, (msg) => {
  const chatId = msg.chat.id;
  if (!registeredUsers.includes(chatId)) {
    registeredUsers.push(chatId);
    bot.sendMessage(chatId, 'Registration successful!');
  } else {
    bot.sendMessage(chatId, 'You are already registered.');
  }
});

// Handle '/stop' command
bot.onText(/\/stop/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Game stopped.');
  ws.send(JSON.stringify({ command: 'stop' }));
});

// Handle '/speedup', '/slowdown', and '/reverse' commands
bot.onText(/\/speedup|slowdown|reverse/, (msg, match) => {
  const command = match[0]; // Get the matched command
  const chatId = msg.chat.id;

  if (command === 'speedup') {
    // Increase the ball's speed (assuming you have logic for dx and dy)
    dx *= 1.1;
    dy *= 1.1;
    bot.sendMessage(chatId, 'Speed increased!');
  } else if (command === 'slowdown') {
    // Decrease the ball's speed
    dx *= 0.9;
    dy *= 0.9;
    bot.sendMessage(chatId, 'Speed decreased!');
  } else if (command === 'reverse') {
    // Reverse the ball's direction
    dx = -dx;
    dy = -dy;
    bot.sendMessage(chatId, 'Direction reversed!');
  }

  // Send the command to the frontend (assuming you have logic to update the ball)
  ws.send(JSON.stringify({ command }));
});

console.log('Bot is running...');