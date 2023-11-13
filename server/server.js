// const express = require("express");
// const app = express()
const { app } = require("./app");
require("dotenv").config();
const port = process.env.SERVER_PORT || 1234;

const { connectDB } = require("./utils/db");

app.listen(port, () => {
  console.log(`Server is connected with Port http://localhost:${port}`);
  connectDB()
});
