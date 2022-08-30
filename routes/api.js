const {
  chargeSimController,
  getSimBalanceController,
  getTariffsController,
} = require("../controllers/userInfoController");

const router = require("express").Router();

router.get("/balance:num", getSimBalanceController);
router.get("/charge:num", chargeSimController);
router.get("/tariffs:countries", getTariffsController);

module.exports = router;
