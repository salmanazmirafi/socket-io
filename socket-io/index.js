//------------------------------------------------

const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);

// Socket Server

const { Server } = require("socket.io");
const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("User Connect");

  setInterval(() => {
    let d = new Date();
    let t = d.getTime();
    socket.send(t);
  }, 10);
});
// Socket Server

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(3000);
console.log("Server is run");

//------------------------------------------------
