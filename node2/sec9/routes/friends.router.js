const express = require("express");
const friendController = require("../controller/friends.controller.js");

const rooter = express.Router();

rooter.use((req, res, next) => {
  console.log("ip address requesting: ", req.ip);
});

rooter.post("/friend", friendController.postFriend);

rooter.get("/", friendController.getFriends);

rooter.get("/friend/:friendId", friendController.getFriend);

module.exports = rooter;
