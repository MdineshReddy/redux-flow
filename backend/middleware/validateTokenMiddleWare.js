const JWT = require("jsonwebtoken");
const validateTokenMiddleware = async (req, res, next) => {
  try {
    if (!req?.headers?.authorization) {
      res.status(400).json({
        success: false,
        message: "Missing Token",
      });
    } else {
      const validToken = JWT.decode(
        req.headers.authorization,
        process.env.JWT_SECRET
      );
      if (validToken) {
        req.user = validToken;
        next();
      } else {
        res.status(400).json({
          success: false,
          message: "Invalid Token",
        });
      }
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: e,
    });
  }
};

module.exports = validateTokenMiddleware;
