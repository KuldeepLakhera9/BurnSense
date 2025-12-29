const {
  calculateBurnoutScore,
  getBurnoutLevel,
} = require("../utils/burnoutCalculator");

exports.analyzeBurnout = (req, res) => {
  const userData = req.body;

  const score = calculateBurnoutScore(userData);
  const level = getBurnoutLevel(score);

  res.json({
    success: true,
    burnoutScore: score,
    burnoutLevel: level,
  });
};
