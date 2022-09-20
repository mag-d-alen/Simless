require("dotenv").config();
const express = require("express");
const cors = require("cors");
const apiRoute = require("./server/routes/apiRoute");
const contactRoute = require("./server/routes/contactRoute");
const paymentRoute = require("./server/routes/paymentRoute");
const invoiceRoute = require("./server/routes/invoiceRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", apiRoute);
app.use("/contact", contactRoute);
app.use("/payment", paymentRoute);
app.use("/createInvoice", invoiceRoute);

app.listen(8000, () => console.log("server running"));
