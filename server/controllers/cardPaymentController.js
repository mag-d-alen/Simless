require("dotenv").config();
const axios = require("axios");
const { CARDCOM_IDENTITY, CARDCOM_UNAME, CARDCOM_URI } = process.env;
const cardPaymentController = async (req, res) => {
  const { name, amount, cardNumber, expiry_Date, cvv } = req.body;
  const cardValidityMonth = expiry_Date.slice(0, 2);
  const cardValidityYear = expiry_Date.slice(2, 4);
  try {
    const response = await axios.post(
      `${CARDCOM_URI}UserName=${CARDCOM_UNAME}&Sum=${amount}&Languages=en&Coinid=usd&CardOwnerName=${name}&CardValidityYear=${cardValidityYear}&cardvaliditymonth=${cardValidityMonth}&cardnumber=${cardNumber}&codepage=65001&cvv=${cvv}&identitynumber=${process.env.CARDCOM_IDENTITY}`
    );
    res.status(200);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { cardPaymentController };
