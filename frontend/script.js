const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Comment out the WebSocket related code for local testing
// const ws = new WebSocket('ws://localhost:8080'); 

// ws.on('open', () => {
//   console.log('WebSocket connection opened');
// });

// ws.on('message', (data) => {
//   const command = JSON.parse(data);

//   if (command === 'speedup') {
//     dx *= 1.1;
//     dy *= 1.1;
//   } else if (command === 'slowdown') {
//     dx *= 0.9;
//     dy *= 0.9;
//   } else if (command === 'reverse') {
//     dx = -dx;
//     dy = -dy;
//   }
// });

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let isRunning = false;

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const speedUpBtn = document.getElementById('speedUpBtn');
const slowDownBtn = document.getElementById('slowDownBtn');
const reverseBtn = document.getElementById('reverseBtn');

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#6C3428";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  if (isRunning) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    x += dx;
    y += dy;

    // Bounce off walls
    if (x + dx > canvas.width - 10 || x + dx < 10) {
      dx = -dx;
    }
    if (y + dy > canvas.height - 10 || y + dy < 10) {
      dy = -dy;
    }
  }
}

// Event listeners for buttons
startBtn.addEventListener('click', () => {
  isRunning = true;
  if (!animationId) {
    animationId = setInterval(draw, 10);
  }
  // ws.send(JSON.stringify({ command: 'start' })); 
});

stopBtn.addEventListener('click', () => {
  isRunning = false;
  clearInterval(animationId);
  animationId = null;
  // ws.send(JSON.stringify({ command: 'stop' }));
});

speedUpBtn.addEventListener('click', () => {
  dx *= 1.1;
  dy *= 1.1;
  // ws.send(JSON.stringify('speedup')); 
});

slowDownBtn.addEventListener('click', () => {
  dx *= 0.9;
  dy *= 0.9;
  // ws.send(JSON.stringify('slowdown')); 
});

reverseBtn.addEventListener('click', () => {
  dx = -dx;
  dy = -dy;
  // ws.send(JSON.stringify('reverse')); 
});

let animationId = null;
draw();