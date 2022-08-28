const User = require("../models/User");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

module.exports = {
  registerUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (user) {
        res.status(400).json({
          success: false,
          message: "Username taken",
        });
      } else {
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const user = new User({ ...req.body, password: hashedPassword });
        const { _id } = await user.save();
        const token = JWT.sign(_id.toString(), process.env.JWT_SECRET);
        res.status(200).json({
          success: true,
          message: "User Saved",
          token,
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Something went wrong!",
        error: e,
      });
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        res.status(400).json({
          success: false,
          message: "User or Password is wrong",
        });
      } else {
        const passwordCorrect = await bcrypt.compare(
          req.body.password,
          user.password
        );

        if (passwordCorrect) {
          const { _id } = user;
          const token = JWT.sign(_id.toString(), process.env.JWT_SECRET);

          res.status(200).json({
            success: true,
            message: "User Logged In",
            token,
          });
        } else {
          res.status(400).json({
            success: false,
            message: "Password Wrong",
          });
        }
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Something went wrong!",
        error: e,
      });
    }
  },

  validateToken: async (req, res, next) => {
    res.status(200).json({
      success: true,
      message: "Valid Token",
    });
  },
};
