var express = require("express");
var router = express.Router();

router.post("/api/cards", require("../api/cards"));
router.post("/api/auth", require("../api/auth"));
router.post("/api/capture", require("../api/capture"));

router.get("/", require("../api"));

module.exports = router;
