const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");

const postsRoute = require("./Routes/posts");

// app.use("/posts", (req, res, next) => {
//   console.log("Posts middleware");
//   next();
// });

// Middleware
app.use(cors());
app.use(express.json());
app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("Home page");
});

//DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB Connected");
  }
);

app.listen(3000);
