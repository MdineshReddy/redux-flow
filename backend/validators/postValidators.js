const yup = require("yup");

const postRequestValidate = async (req, res, next) => {
  const Schema = yup.object().shape({
    title: yup.string().min(6).max(100).required(),
    body: yup.string().min(6).max(500).required(),
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
  postRequestValidate,
};
