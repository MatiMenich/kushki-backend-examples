module.exports = async (req, res) => {
  console.log("Received GET", req);
  res.send(`<h1>Kushki Backend Examples</h1>`);
};
