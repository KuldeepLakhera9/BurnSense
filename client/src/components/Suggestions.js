function Suggestions({ level }) {
  let tips = [];

  if (level === "Low") {
    tips = [
      "Maintain your healthy routine",
      "Stay hydrated and take short breaks",
      "Continue balanced screen usage",
    ];
  } else if (level === "Medium") {
    tips = [
      "Reduce screen time before sleep",
      "Take 5-minute breaks every hour",
      "Limit social media usage",
    ];
  } else if (level === "High") {
    tips = [
      "Take a digital detox",
      "Avoid phone usage at night",
      "Focus on proper sleep and relaxation",
      "Consider mindfulness or breathing exercises",
    ];
  }

  return (
    <div
  style={{
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#ecfeff",
    borderRadius: "10px",
  }}
>

      <h2 style={{ marginBottom: "10px" }}>
  Personalized Suggestions
</h2>

      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default Suggestions;
