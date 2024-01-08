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

module.exports = router;
