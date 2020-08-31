const express = require("express");
const bodyParser = require("body-parser");

const router = require("./router");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.get("/", (req, res) => {
  res.send(`<h1>Kushki Backend Examples</h1>`);
  console.log("Received GET");
});

// Listen on port 8080
const listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
