const { invoiceController } = require("../controllers/invoiceController");
const router = require("express").Router();

router.post("/createInvoice", invoiceController);

module.exports = router;
