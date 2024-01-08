const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost:27017/mongoPrac");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  secret: String,
  // username: String,
  // nickname: String,
  // description: String,
  // categories: {
  //   type: Array,
  //   default: [],
  // },
  // datecreated: {
  //   type: Date,
  //   default: Date.now(),
  // },
});

userSchema.plugin(plm);

module.exports = mongoose.model("users", userSchema);
