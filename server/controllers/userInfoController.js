require("dotenv").config();
const axios = require("axios");
const uname = process.env.UNAME;
const upass = process.env.UPASS;
const uri = process.env.URI;

// async (req: express.Request, res: express.Response): Promise<void>
const topUpSimController = async (req, res) => {
  const num = req.params.num;
  const { amount, orderId } = req.body.amount;
  try {
    const response = await axios.post(
      `${uri}uname=${uname}&upass=${upass}&plain=1&command=sbalance&onum=${num}&amount=${amount}&curr=USD&orderid=${orderId}`
    );
    return res.send(response.data.client);
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
    res.send(error);
  }
};
const getTariffsController = async (req, res) => {
  try {
    const response = await axios.get(
      `${uri}uname=${uname}&upass=${upass}&plain=1&command=getrates`
    );
    return res.send(response.data.getrates.service);
  } catch (error) {
    res.json(error);
  }
};
module.exports = {
  getSimBalanceController,
  getTariffsController,
  topUpSimController,
};
