const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    min: 6,
  },
});

module.exports = mongoose.model("User", UserSchema);
