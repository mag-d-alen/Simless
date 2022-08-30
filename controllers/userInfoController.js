require("dotenv").config();
const axios = require("axios");
const uname = process.env.UNAME;
const upass = process.env.UPASS;
const uri = process.env.URI;

const chargeSimController = async (req, res) => {
  const num = req.params.num;
  const amount = req.query.amount;
  try {
    const response = await axios.post(
      `${uri}uname=${uname}&upass=${upass}&plain=1&command=sbalance`
    );
    console.log(response.data);
    return res.send(response.data);
  } catch (error) {
    console.log(error);
  }
};
const getSimBalanceController = async (req, res) => {
  const num = req.params.num;
  try {
    const response = await axios.get(
      `${uri}uname=${uname}&upass=${upass}&plain=1&command=gbalance&onum=${num}`,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    return res.send(response.data.records.card);
  } catch (error) {
    console.log(error);
  }
};
const getTariffsController = async (req, res) => {
  const countries = req.params.countries;
  try {
    const response = await axios.get(
      `${uri}uname=${uname}&upass=${upass}&plain=1&command=getrates`,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    return res.send(response.data.getrates);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getSimBalanceController,
  getTariffsController,
  chargeSimController,
};
