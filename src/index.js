const express = require("express");
const bodyParser = require("body-parser");

const router = require("./router");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

// Listen on port 8080
const listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
