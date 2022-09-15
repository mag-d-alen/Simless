require("dotenv").config();
const express = require("express");
const cors = require("cors");
const apiRoute = require("./server/routes/api");
const contactRoute = require("./server/routes/contactApi");
const paymentRoute = require("./server/routes/paymentApi");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", apiRoute);
app.use("/contact", contactRoute);
app.use("/payment", paymentRoute);

app.listen(8000, () => console.log("server running"));
