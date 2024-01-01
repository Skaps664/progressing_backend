const { name } = require("ejs");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/27017/testy");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
});

module.export = mongoose.model("userModel", userSchema);
