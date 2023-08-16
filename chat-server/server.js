const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));

const server = http.createServer(app);
const io = new Server(server);

const comments = [];

app.get("/comments", function (req, res) {
  res.json({ messages: comments });
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", function () {
    console.log("user disconnected");
  });

  socket.on("message", (message) => {
    console.log("message ", message);
    comments.push(message);
    socket.broadcast.emit("message", message);
  });
});

const port = 5000;

server.listen(port, () => console.log(`listening on port ${port}`));
