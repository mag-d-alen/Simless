const {contactController} = require("../controllers/contactController");
const router = require("express").Router();

router.post("/postMessage", contactController);

module.exports = router;
