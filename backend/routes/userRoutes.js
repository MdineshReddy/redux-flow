const express = require("express");
const router = express.Router();

const { userRequestValidate } = require("../validators/userValidators");
const {
  registerUser,
  loginUser,
  validateToken,
} = require("../controllers/userController");
const validateTokenMiddleWare = require("../middleware/validateTokenMiddleWare");

router.post("/register", userRequestValidate, registerUser);
router.post("/login", userRequestValidate, loginUser);
router.post("/validate", validateTokenMiddleWare, validateToken);

module.exports = router;
