var express = require("express");
var router = express.Router();

router.post("/api/cards", require("../api/cards"));

router.get("/", require("../api"));

module.exports = router;
