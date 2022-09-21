const { contactController } = require("../controllers/contactController");
const router = require("express").Router();

router.post("/sendContactUsMessage", contactController);

module.exports = router;
