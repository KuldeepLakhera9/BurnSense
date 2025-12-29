const express = require("express");
const router = express.Router();

const { analyzeBurnout } = require("../controllers/analyzeController");

router.post("/analyze", analyzeBurnout);

module.exports = router;
