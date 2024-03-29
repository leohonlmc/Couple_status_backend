const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://b-status.onrender.com",
    ],
    methods: ["GET", "POST", "DELETE", "PATCH"],
    credentials: true,
    secure: true,
  })
);

app.use(express.json());

app.use(require("./router"));

mongoose
  .connect(process.env.DB_URL, {})
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
