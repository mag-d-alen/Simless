const router = require("express").Router();
const {cardPaymentController} = require("../controllers/cardPaymentController")
router.post("/cardPayment", cardPaymentController);
module.exports = router;