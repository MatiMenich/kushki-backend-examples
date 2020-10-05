const axios = require("axios").default;

const commerces = {
  ecuador_otp: {
    privateId: process.env.KUSHKI_ECUADOR_OTP_PRIVATE_MERCHANT_ID
  },
  chile: {
    privateId: process.env.KUSHKI_CHILE_PRIVATE_MERCHANT_ID
  },
}

const kushkiAPI = (merchant) => {
  let privateId;

  if(merchant) {
    privateId = commerces[merchant].privateId
  } else {
    privateId = commerces.chile.privateId
  }

  return axios.create({
    baseURL: "https://api-uat.kushkipagos.com",
    headers: { "Private-Merchant-Id": privateId }
  })
};

module.exports = kushkiAPI;
