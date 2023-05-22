const db = require("../models");
const Guess = db.guess;

exports.newGuess = (req, res) => {

  Guess.findOne({
    user: req.body.user
  }, (err, userGuess) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (userGuess) {
      Guess.deleteOne({ user: req.body.user }, function (err, result) {
        if (err) {
          console.log(err)
        } else {
          console.log("Result :", result)
        }
      });
    }
  })
  const guess = new Guess({
    user: req.body.user,
    first: req.body.first,
    second: req.body.second,
    third: req.body.third,
    fourth: req.body.fourth,
    fifth: req.body.fifth,
    sixth: req.body.sixth,
    seventh: req.body.seventh,
    eight: req.body.eight
  });

  guess.save((err, guess) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
  });

  setTimeout(() => {
    Guess.findOne({
      user: req.body.user
    }, (err, userGuess) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.send(userGuess)
    })
  }, 500);

};

exports.getGuesses = (req, res) => {
  Guess.findOne({
    user: req.body.user
  }, (err, userGuess) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send(userGuess)
  })
};

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
