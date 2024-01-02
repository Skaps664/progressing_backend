const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/testy");

const userSchema = mongoose.Schema({
  username: String,
  Fname: String,
  age: Number,
});

module.exports = mongoose.model("users", userSchema);
