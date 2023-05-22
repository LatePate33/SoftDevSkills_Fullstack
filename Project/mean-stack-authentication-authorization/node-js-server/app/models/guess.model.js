const mongoose = require("mongoose");

const Guess = mongoose.model(
  "Guess",
  new mongoose.Schema({
    user: String,
    first: String,
    second: String,
    third: String,
    fourth: String,
    fifth: String,
    sixth: String,
    seventh: String,
    eight: String,
  })
);

module.exports = Guess;