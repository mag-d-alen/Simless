const {
  topUpSimController,
  getSimBalanceController,
  getTariffsController,
} = require("../controllers/userInfoController");

const router = require("express").Router();

router.get("/balance:num", getSimBalanceController);
router.post("/topUp:num", topUpSimController);
router.get("/tariffs", getTariffsController);

module.exports = router;
