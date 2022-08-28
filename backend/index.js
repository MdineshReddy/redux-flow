const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
require("dotenv").config();
const cors = require("cors");

app.use(express.json());
app.use(cors());
// Routes
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to DB");

  app.listen(PORT, () => {
    console.log(`Server listening on PORT:${PORT}`);
  });
});
