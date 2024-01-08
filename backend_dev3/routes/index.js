var express = require("express");

const userModel = require("./users");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/create", async function (req, res) {
  let userData = await userModel.create({
    username: "Sudais",
    nickname: "skaps",
    description: "3rd year CS undergrad",
    categories: ["art", "backend", "football"],
  });
  res.send(userData);
});

module.exports = router;
