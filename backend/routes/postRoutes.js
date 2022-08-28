const express = require("express");
const postRouter = express.Router();

const { postRequestValidate } = require("../validators/postValidators");
const { createPost, getPosts } = require("../controllers/postController");
const validateTokenMiddleware = require("../middleware/validateTokenMiddleWare");

postRouter.get("/", validateTokenMiddleware, getPosts);
postRouter.post("/", validateTokenMiddleware, postRequestValidate, createPost);

module.exports = postRouter;
