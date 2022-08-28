const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  authorId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    min: 6,
    max: 100,
  },
  body: {
    type: String,
    min: 6,
    max: 500,
  },
});

module.exports = mongoose.model("Post", PostSchema);
