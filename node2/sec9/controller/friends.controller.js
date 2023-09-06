const friendModel = require("../models/friends.model");

function getFriends(req, res) {
  res.json(friendModel);
}

function getFriend(req, res) {
  const friendId = req.params.friendId;
  const frnd = friendModel[friendId];

  if (frnd) {
    res.json(frnd).status(200);
  } else {
    res.sendStatus(404).json({
      error: "Friend does not exits",
    });
  }
}

function postFriend(req, res) {
  if (!req.body.name) {
    res.status(400).json({
      error: "Missing friend name",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friendModel.length,
  };
  friendModel.push(newFriend);
  res.json(newFriend);
}

module.exports = {
  getFriend,
  getFriends,
  postFriend,
};
