require("dotenv").config();
const axios = require("axios");
const cardPaymentController = async (req, res) => {
  const { name, amount, cardNumber, expiry_Date, cvv } = req.body;
  console.log(name, amount, cardNumber, expiry_Date, cvv);
  // try {
  //   const response = await axios.post(`${uri}`);
  //   return res.send(response.data);
  // } catch (error) {
  //   console.log(error);
  // }
};
module.exports = { cardPaymentController };
