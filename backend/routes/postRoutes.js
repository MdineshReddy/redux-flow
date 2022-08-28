const express = require("express");
const postRouter = express.Router();

const { postRequestValidate } = require("../validators/postValidators");
const {
  createPost,
  getPosts,
  getPost,
  editPost,
  deletePost,
} = require("../controllers/postController");
const validateTokenMiddleware = require("../middleware/validateTokenMiddleWare");

postRouter.get("/", validateTokenMiddleware, getPosts);
postRouter.get("/:id", validateTokenMiddleware, getPost);
postRouter.post("/", validateTokenMiddleware, postRequestValidate, createPost);
postRouter.patch("/:id", validateTokenMiddleware, editPost);
postRouter.delete("/:id", validateTokenMiddleware, deletePost);

module.exports = postRouter;
