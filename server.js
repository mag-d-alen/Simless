require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const nodemailer = require("nodemailer");
const apiRoute = require("./backend/routes/api");

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
