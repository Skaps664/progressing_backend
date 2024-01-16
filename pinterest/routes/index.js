var express = require("express");
var router = express.Router();
const userModel = require("../models/userModel");
const postModel = require("../models/postModel");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/createuser", async function (req, res) {
  var createdUser = await userModel.create({
    username: "sudais",
    password: "heyhey",
    posts: [],
    dp: String,
    email: "msudiask664@gmail.com",
    fullName: "Sudais Khan",
  });
  res.send(createdUser);
});

router.get("/createpost", async function (req, res) {
  var createdPost = await postModel.create({
    postText: "This is post no 2",
    user: "65a6b9e1a5be0a7859032627",
  });
  let user = await userModel.findOne({ _id: "65a6b9e1a5be0a7859032627" });
  user.posts.push(createdPost._id);
  await user.save();
  res.send("done");
});

module.exports = router;
