// Development WebSocket server - run alongside `npm run dev`
// Usage: node dev-ws-server.js

const fs = require("fs");
const path = require("path");
const http = require("http");
const { WebSocketServer } = require("ws");

// Generate quiz data if not exists
const quizDataPath = path.join(__dirname, "quiz-data.json");
if (!fs.existsSync(quizDataPath)) {
  console.log("Generating quiz-data.json...");
  require("./scripts/generate-quiz-data.js");
}

const { handleConnection, startHeartbeat } = require("./ws-server");

const port = 3001;
const server = http.createServer((req, res) => {
  // CORS headers for dev
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200);
  res.end("WebSocket dev server");
});

const wss = new WebSocketServer({ noServer: true });

server.on("upgrade", (req, socket, head) => {
  if (req.url === "/ws") {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit("connection", ws, req);
      handleConnection(ws);
    });
  } else {
    socket.destroy();
  }
});

startHeartbeat(wss);

server.listen(port, () => {
  console.log(`> Dev WebSocket server on ws://localhost:${port}/ws`);
});
