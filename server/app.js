const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// body parser
app.use(express.json({ limit: "50mb" }));

// Cookie Parser
app.use(cookieParser());

// cors
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

app.get("/check", (req,res)=>{
    res.status(200).json({
        message:"APi working",
        success:true
    })
})

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
// });


module.exports = { app };
