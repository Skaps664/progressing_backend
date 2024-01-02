var express = require("express");
var router = express.Router();
const userModel = require("../models/userModel");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/create", async function (req, res, next) {
  const createdUser = await userModel.create({
    usernmae: "skaps",
    Fname: "Sudais Khan",
    age: 20,
  });
  res.send(createdUser);
});

module.exports = router;
