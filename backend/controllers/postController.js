const Post = require("../models/Post");

const createPost = async (req, res) => {
  try {
    console.log(req.user);
    const post = new Post({ ...req.body, authorId: req.user });
    await post.save();
    res.status(200).json({
      success: true,
      message: "Post created",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: e,
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({
      success: true,
      posts,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: e,
    });
  }
};

module.exports = {
  createPost,
  getPosts,
};
