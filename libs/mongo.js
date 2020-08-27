const mongoose = require("mongoose");
const Log = require("../libs/log")("mongo");

const connectDB = () => {
  mongoose
    .connect("mongodb://mongodb:27017/raksh", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => {
      Log.info("Connection Established!!");
    })
    .catch((err) => {
      Log.warn(`Couldn't connect MongoDB`);
      process.exit(1);
    });
};

module.exports = connectDB;
