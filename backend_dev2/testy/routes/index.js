var express = require("express");
var router = express.Router();
const userModel = require("../models/userModel");

/* GET home page. */
router.get("/", function (req, res, next) {
  // req.session.test = true;
  res.render("index", { title: "myApp" });
});

router.get("/create", async function (req, res, next) {
  const createdUser = await userModel.create({
    username: "skaps",
    Fname: "Sudais Khan",
    age: 20,
  });
  res.send(createdUser);
});

// router.get("/checktest", function (req, res) {
//   console.log(req.session);
//   res.send("check console");
// });

module.exports = router;
