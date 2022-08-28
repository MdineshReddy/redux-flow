const yup = require("yup");

const userRequestValidate = async (req, res, next) => {
  const Schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(6).required(),
  });

  try {
    await Schema.validate(req.body);
    next();
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Validation Error",
      error: e.errors,
    });
  }
};

module.exports = {
  userRequestValidate,
};
