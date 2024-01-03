const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongoPrac");

const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  categories: {
    type: Array,
    default: [],
  },
  //   datecreated: {
  //     type: Date,
  //     default: Date.now(),
  //   },
});

module.exports = mongoose.model("userModel", userSchema);
