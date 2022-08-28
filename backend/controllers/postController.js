const Post = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const post = new Post({ ...req.body, authorId: req.user });
    await post.save();
    res.status(200).json({
      success: true,
      message: "Post created",
      post,
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

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post) {
      res.status(200).json({
        success: true,
        post,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No Post With That ID",
      });
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: e,
    });
  }
};

const editPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      const newPost = await Post.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: "Post Updated",
        post: newPost,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "No Post with given ID",
      });
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: e,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      await post.delete();
      res.status(200).json({
        success: true,
        message: "Post Deleted",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "No Post with given ID",
      });
    }
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
  getPost,
  editPost,
  deletePost,
};
