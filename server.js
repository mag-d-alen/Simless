require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const nodemailer = require("nodemailer");
const apiRoute = require("./routes/api");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", apiRoute);

// const contactEmail = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   auth: {
//     user: "simlessil@gmail.com",
//     pass: "simless444",
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

app.get("/purchase", async (req, res) => {
  try {
    const res = await axios.get(`${uri}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

app.get("/charge:num", async (req, res) => {
  const num = req.params.num;
  const amount = req.query.amount;
  try {
    const response = await axios.post(`${uri}sbalance`);
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/topup:num&sum", async (req, res) => {
  const { num, sum } = req.params;
  try {
    const response = await axios.get(`${uri}gbalance&onum=${num}`);
    console.log(res.data);
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

// app.post("/contact", async (req, res) => {
//   const { name, email, message } = req.body.params;

//   const mail = {
//     from: name,
//     to: "simlessil@gmail.com",
//     subject: "Contact Form Submission",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.send({ status: "ERROR" });
//     } else {
//       res.send({ status: "Message Sent" });
//     }
//   });
// });

app.listen(8000, () => console.log("server running"));
