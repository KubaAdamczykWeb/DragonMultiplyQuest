module.exports = app => {
  const cards = require("../controllers/card.controller.js");

  var router = require("express").Router();

  router.post("/", cards.newCard);

  router.post("/start-deck", cards.newDeckByValue);

  router.get("/repeat-deck", cards.repeatDeck);

  router.get("/value-deck", cards.deckByValue); 

  app.use('/api/cards', router);
};