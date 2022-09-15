require("dotenv").config();
const axios = require("axios");
const contactController = async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log(name, email, phone, message);
  // try {
  //   const response = await axios.post(`${uri}`);
  //   return res.send(response.data);
  // } catch (error) {
  //   console.log(error);
  // }
};
module.exports = { contactController };
