const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.MONGODB_URI;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to Mongodb.");
  })
  .catch((err) => {
    console.log(`${err} occured during connection.`);
  });

const fighterSchema = mongoose.Schema({
  name: String,
  physical: {
    height: Number,
    weight: Number,
    reach: Number,
    age: Number,
  },
  record: [
    {
      outcome: String,
      opponent: String,
      method: String,
      round: String,
      time: String,
    },
  ],
});

const Fighter = mongoose.model("Fighter", fighterSchema);

const EventSchema = mongoose.Schema({
  org: String,
  title: String,
  fights: [{ red: String, blue: String }],
});

const Event = mongoose.model("Event", EventSchema);

module.exports = { Event, Fighter };
