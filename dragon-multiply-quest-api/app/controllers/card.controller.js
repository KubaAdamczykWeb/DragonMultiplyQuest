const db = require("../models");
const Card = db.cards;

exports.newCard = (req, res) => {
  const card = {
    userId: 1,
    type: 'multiply',
    value1: req.body.val1,
    value2: req.body.val2,
    repeatPriority: 1,
    points: null
  };
 
  Card.create(card)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Card."
      });
    });
};

exports.newDeckByValue = (req, res) => {
  const card = {
    userId: 1,
    type: 'multiply',
    value1: req.body.val1,    
    repeatPriority: 1,
    points: null
  };

  const deck = [
    {...card, value2: 1},
    {...card, value2: 2},
    {...card, value2: 3},
  ]
 
  Card.bulkCreate(deck)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Card."
      });
    });
};

exports.repeatDeck = (req, res) => {
  Card.findAll({ where: {repeatPriority: 1}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cards."
      });
    });
}; 

exports.deckByValue = (req, res) => {
  const val1 = req.query.val1;

  Card.findAll({ where: {value1: val1}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cards."
      });
    });
}; 

