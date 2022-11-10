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

  socket.on("disconnect", () => {
    console.log("User Disconnect");
  });
});
// Socket Server

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(3000);
console.log("Server is run");

//------------------------------------------------
