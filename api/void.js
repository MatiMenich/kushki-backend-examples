const kushkiAPI = require("../src/kushkiAPI");
const allowCors = require("../src/allowCors");

const handler = async (req, res) => {
  const ticketNumber = req.body.ticketNumber;
  const amount = req.body.amount;

  if (!ticketNumber || !amount) {
    return res
      .status(422)
      .send({ status: "error", message: "missing parameter(s)" });
  }

  return kushkiAPI()
    .delete(`/v1/charges/${ticketNumber}`, {
      amount: {
        subtotalIva: 0,
        subtotalIva0: amount,
        iva: 0,
        ice: 0,
        currency: 'USD',
      },
      fullResponse: true
    })
    .then((response) => {
      console.log(response.data);
      return res.send(response.data);
    })
    .catch((error) => {
      console.log(error.response);
      return res.status(422).send(error.response.data);
    });
};

module.exports = allowCors(handler)
