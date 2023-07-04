const http = require("http");
const fs = require("fs");
const socket = require("socket.io");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  let readableStream = fs.createReadStream("index.html");
  readableStream.pipe(res);
});

const io = socket(server);
io.on("connection", (socket) => {
  setInterval(() => {
    var dataToBeSent = new Date();
    socket.emit("msg_from_server_peer", dataToBeSent);
  }, 2000);
  socket.on("msg_from_client_peer",dataFromClient=>{
    console.log(dataFromClient);
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
