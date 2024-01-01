const { name } = require("ejs");
const express = require("express");
const app = express();
const port = 3000;

app.use(function (req, res, next) {
  console.log("middle ware working");
  next();
});

app.set("view engine", "ejs");

app.use(express.static("./public"));

app.get("/", function (req, res) {
  res.render("home", { name: "Sudais" });
});

app.get("/error", function (req, res, next) {
  throw Error("Se masla kho shte rora");
});

app.get("/aboutUs", function (req, res) {
  res.render("index");
});

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(3000);
