const kushkiAPI = require("../src/kushkiAPI");
const allowCors = require("../src/allowCors");

const handler = async (req, res) => {
  const token = req.body.token;
  const amount = req.body.amount;
  const email = req.body.email;
  const phoneNumber = req.body.phone;
  const name = req.body.name;
  const planName = req.body.planName;

  if (!token || !amount || !email || !phone || !name || !planName) {
    return res
      .status(422)
      .send({ status: "error", message: "missing parameter(s)" });
  }

  const [firstName, lastName] = name.split(" ");

  const today = new Date();

  return kushkiAPI
    .post("/subscriptions/v1/card", {
      token: token,
      planName,
      amount: {
        subtotalIva: 0,
        subtotalIva0: amount,
        ice: 0,
        iva: 0,
        currency: "USD"
      },
      startDate: today.toISOString().substring(0, 10),
      periodicity: 'monthly',
      contactDetails: {
        firstName,
        lastName,
        email,
        phoneNumber
      }
    })
    .then((response) => {
      // Your own logic here...
      console.log(response.data);
      return res.send(response.data);
    })
    .catch((error) => {
      console.log(error.response);
      return res.status(422).send(error.response.data);
    });
};

module.exports = allowCors(handler)
