const path = require("path");
const http = require("http");
const { WebSocketServer } = require("ws");
const { handleConnection, startHeartbeat } = require("./ws-server");

const dir = path.join(__dirname);
process.chdir(dir);
process.env.NODE_ENV = "production";

const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = parseInt(process.env.PORT, 10) || 3000;

// Load the Next.js config from the auto-generated server.js
const serverJsPath = path.join(dir, "server.js");
const serverCode = require("fs").readFileSync(serverJsPath, "utf8");
const configMatch = serverCode.match(
  /const nextConfig = ({[\s\S]*?})\n\nprocess\.env\.__NEXT_PRIVATE_STANDALONE_CONFIG/,
);
if (configMatch) {
  process.env.__NEXT_PRIVATE_STANDALONE_CONFIG = configMatch[1];
}

const next = require("next");
const app = next({ dev: false, dir, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    handle(req, res);
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

  server.listen(port, hostname, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
    console.log(`> WebSocket server on /ws`);
  });
});
