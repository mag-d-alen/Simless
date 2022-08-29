require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const uname = process.env.UNAME;
const upass = process.env.UPASS;
app.use(cors());
app.use(express.json());
const uri = `https://tsim-dev.toxiclabs.net/tsim_xml/service/xmlgate?uname=${uname}&upass=${upass}&plain=1&command=`;
const router = express.Router();

const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "simlessil@gmail.com",
    pass: "simless444",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.get("/tariffs:countries", async (req, res) => {
  const countries = req.params.countries;
  try {
    const res = await axios.get(`${uri}getrates`, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
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

// app.get("/charge:num", async (req, res) => {
// const num = req.params.num
// const amount = req.query.amount

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

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body.params;

  const mail = {
    from: name,
    to: "simlessil@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.send({ status: "ERROR" });
    } else {
      res.send({ status: "Message Sent" });
    }
  });
});

app.listen(8000, () => console.log("server running"));
