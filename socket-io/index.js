const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const http = require("http");
const expressServer = http.createServer(app);
expressServer.listen(3000);
console.log("Server is run");
