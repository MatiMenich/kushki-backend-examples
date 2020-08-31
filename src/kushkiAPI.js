const axios = require("axios").default;

const kushkiAPI = axios.create({
  baseURL: "https://api-uat.kushkipagos.com",
  headers: { "Private-Merchant-Id": process.env.KUSHKI_PRIVATE_MERCHANT_ID }
});

module.exports = kushkiAPI;
