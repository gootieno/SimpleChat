const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "http://localhost:5002" }));

const comments = [];

app.post("/comments", function (req, res) {
  const comment = req.body;
  console.log("comment express ", comment);
  comments.push(comment);

  // talk to ai server
  res.json(comment);
});

app.get("/comments", function (req, res) {
  res.json({ messages: comments });
});

const port = 5000;

app.listen(port, () => console.log(`listening on port ${port}`));
