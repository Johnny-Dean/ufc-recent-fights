const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.MONGODB_URI;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => {
    console.log(`${err} occured during connection`);
  });

const fighterSchema = mongoose.Schema({
  Name: String,
  // @Note: Round will be turned into an integer in the next version of the scrapper
  Record: [
    {
      Outcome: String,
      Opponent: String,
      Method: String,
      Round: String,
      Time: String,
    },
  ],
});

const Fighter = mongoose.model("Fighter", fighterSchema);

const EventSchema = mongoose.Schema({
  Title: String,
  Fights: [{ Red: String, Blue: String }],
});

const Event = mongoose.model("Event", EventSchema);

module.exports = { Event, Fighter };
