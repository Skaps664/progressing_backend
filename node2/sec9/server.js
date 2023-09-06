const express = require("express");
const friendsRouter = require("./routes/friends.router.js");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.baseUrl}${req.url}`);
  next();
});

app.use(express.json());

app.use(friendsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
