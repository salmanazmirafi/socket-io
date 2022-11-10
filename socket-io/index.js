const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);

// Socket

const { Server } = require("socket.io");
let io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("New User Connect");
});
// Router

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(3000);
console.log("server connect");
