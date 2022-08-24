require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const uname = process.env.UNAME;
const upass = process.env.UPASS;
app.use(cors());
app.use(express.json());
const uri = `https://tsim-dev.toxiclabs.net/tsim_xml/service/xmlgate?uname=${uname}&upass=${upass}&plain=1&command=`;

app.get("/tariffs:countries", async (req, res) => {
  const countries = req.params.countries;
  try {
    const res = await axios.get(`${uri}getrates`, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

app.get("/purchase", async (req, res) => {
  try {
    const res = await axios.get(`${uri}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

// app.get("/charge:num", async (req, res) => {ß
//   try {
//     const res = await axios.post(`${uri}sbalance`);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// });

app.get("/balance:num", async (req, res) => {
  const num = req.params.num;
  try {
    const res = await axios.get(`${uri}gbalance&onum=${num}`, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

app.get("/topup:num&sum", async (req, res) => {
  const { num, sum } = req.params;
  try {
    const res = await axios.get(`${uri}gbalance&onum=${num}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

// account;
// sbalance;

app.listen(8000, () => console.log("server running"));
