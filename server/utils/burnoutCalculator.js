function calculateBurnoutScore(data) {
  const {
    screenTime,
    nightUsage,
    unlocks,
    socialTime,
    notifications,
  } = data;

  // Normalize values (convert to 0–1 range)
  const screenScore = Math.min(screenTime / 10, 1);
  const nightScore = Math.min(nightUsage / 5, 1);
  const unlockScore = Math.min(unlocks / 100, 1);
  const socialScore = Math.min(socialTime / 6, 1);
  const notificationScore = Math.min(notifications / 200, 1);

  // Weighted burnout score
  const burnoutScore =
    screenScore * 30 +
    nightScore * 25 +
    unlockScore * 15 +
    socialScore * 20 +
    notificationScore * 10;

  return Math.round(burnoutScore);
}

function getBurnoutLevel(score) {
  if (score <= 40) return "Low";
  if (score <= 70) return "Medium";
  return "High";
}

module.exports = { calculateBurnoutScore, getBurnoutLevel };
