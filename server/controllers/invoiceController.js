require("dotenv").config();
const axios = require("axios");
const invoiceController = async (req, res) => {
  console.log(req.body);
  // try {
  //   const response = await axios.post(`${uri}`);
  //   return res.send(response.data);
  // } catch (error) {
  //   console.log(error);
  // }
};
module.exports = { invoiceController };
