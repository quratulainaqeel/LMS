const { connect } = require("mongoose");
const { setTimeout } = require("timers");
require("dotenv").config();

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI).then((data) => {
      console.log(`database connected with ${data.connection.host}`);
    });
  } catch (error) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};


module.exports = { connectDB };
