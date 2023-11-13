const { Redis } = require("ioredis");
require("dotenv").config();

const redisClient = () => {
  if (process.env.REDIS_URL) {
    console.log("Redis is connected");
    return process.env.REDIS_URL;
  }
  throw new Error("Redis connection Failed");
};
const redis = new Redis(redisClient());
module.exports = redis;
