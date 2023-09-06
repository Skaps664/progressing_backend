const express = require("express");

const app = express();

const PORT = 3000;

const friend = [
  {
    id: 0,
    name: "omer",
  },
  {
    id: 1,
    name: "basit",
  },
];

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

app.post("/friend", (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      error: "Missing friend name",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friend.length,
  };
  friend.push(newFriend);
  res.json(newFriend);
});

app.get("/", (req, res) => {
  res.json(friend);
});

app.get("/friend/:friendId", (req, res) => {
  const friendId = req.params.friendId;
  const frnd = friend[friendId];

  if (frnd) {
    res.json(frnd).status(200);
  } else {
    res.sendStatus(404).json({
      error: "Friend does not exits",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
