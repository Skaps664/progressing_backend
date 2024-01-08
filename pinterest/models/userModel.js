const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/pinterestApp");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [],
  dp: String, // Assuming dp is a link to the user's display picture
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: String,
});

module.exports = mongoose.model("userModel", userSchema);
