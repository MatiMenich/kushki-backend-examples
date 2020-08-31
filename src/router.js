var express = require("express");
var router = express.Router();

router.post("/api/cards", require("../api/cards.js"));

module.exports = router;
