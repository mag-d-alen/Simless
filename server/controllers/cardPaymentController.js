require("dotenv").config();
const axios = require("axios");
const cardPaymentController = async (req, res) => {
  const { name, amount, cardNumber, expiry_Date, cvv } = req.body;
  const cardValidityMonth = expiry_Date.slice(0, 2);
  const cardValidityYear = expiry_Date.slice(2, 4);
  try {
    const response = await axios.post(
      `${process.env.CARDCOM_URI}Sum=${amount}&cardnumber=${cardNumber}&cardvalidityyear=20${cardValidityYear}&cardvaliditymonth=${cardValidityMonth}&identitynumber=${process.env.CARDCOM_IDENTITY}&username=t${process.env.CARDCOM_UNAME}&Languages=en;`
    );
    return res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { cardPaymentController };
