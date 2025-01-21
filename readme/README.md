**Bouncing Ball Game with Telegram Bot Control**

This project implements a simple bouncing ball game controllable via a Telegram bot. It demonstrates front-end development, WebSocket communication, and basic bot development.

Project Structure:

Restart/
├── backend/
│   └── Server.js: WebSocket server code
│   
├── bot/
│   ├── index.js: Telegram bot logic
│   ├── package-lock.json
│   └── package.json
├── frontend/
│   ├── index.html: HTML structure for the game
│   ├── script.js: JavaScript code for game logic and UI interactions
│   ├── style.css: CSS styles for the game
│   ├── package-lock.json
│   └── package.json
├── readme/
│   └── README.md (this file)
├── .env (optional): Environment variables file
├── node_modules/
├── package-lock.json
└── package.json
 
 **Installation and Setup:**

Prerequisites:

Node.js and npm installed on your system (refer to official documentation for installation instructions).
A Telegram account and a created Telegram Bot with its API token.

If you obtained the code through a version control system (e.g., Git), clone the repository to your local machine.
Install Dependencies:

Open a terminal and navigate to the project's root directory (Restart/).
Run npm install to install the dependencies required for the entire project.
Then, navigate to each subfolder (bot/, frontend/, backend/) and run npm install again to install dependencies specific to each module.
Configure Environment Variables (optional):

Create a .env file in the root directory (if not already present).
Add the following line to the .env file, 
BOT_TOKEN=7114805131:AAG45sSoipcJbuJa_YM04OPxHCEYOgjlcGI
Run the Server:

Open a terminal in the backend/ folder.
Run node Server.js to start the WebSocket server.
Run the Telegram Bot:

In a separate terminal, navigate to the bot/ folder.
Run node index.js to start the Telegram Bot.
Access the Webpage:

Open the index.html file located in the frontend/ folder in your web browser.
Usage:

Open Telegram:

Open the Telegram app and " t.me/animateball_bot.".
Control the Game "bouncing_ball":

Use the following commands in the Telegram chat to control the game:
/start: Start the ball animation.
/stop: Stop the ball animation.
/speedup: Increase the ball's speed.
/slowdown: Decrease the ball's speed.
/reverse: Reverse the ball's direction.
Registration : i am not sure.

.