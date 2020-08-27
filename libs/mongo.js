const mongoose = require("mongoose");
const Log = require("../libs/log")("mongo");
const config = require("config");
const db = config.get("MONGO_URI");

const connectDB = () => {
  mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex: true,
  }).then(() => {
    Log.info("Connection Established!!");
  }).catch((err) =>{
    Log.warn(`Couldn't connect MongoDB`);
    process.exit(1)
  }) 
};

module.exports = connectDB;
