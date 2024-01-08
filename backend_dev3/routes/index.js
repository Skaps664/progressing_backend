var express = require("express");
const localStrategy = require("passport-local");

const userModel = require("./users");
const passport = require("passport");

passport.use(new localStrategy(userModel.authenticate()));

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index3");
});

router.get("/profile", isLoggedIn, function (req, res, next) {
  res.render("index");
});
router.get("/profile2", function (req, res, next) {
  res.render("index2");
});

// router.get("/create", async function (req, res) {
//   let userData = await userModel.create({
//     username: "Sudais",
//     nickname: "skaps",
//     description: "3rd year CS undergrad",
//     categories: ["art", "backend", "football"],
//   });
//   res.send(userData);
// });

router.post("/register", function (req, res) {
  var userData = new userModel({
    username: req.body.username,
    secret: req.body.secret,
  });
  userModel
    .register(userData, req.body.password)
    .then(function (registereduser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      });
    });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/profile2",
  }),
  function (req, res) {}
);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/");
  }
}

module.exports = router;
