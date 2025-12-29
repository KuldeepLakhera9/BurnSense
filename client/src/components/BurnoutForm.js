import { useState } from "react";
import Dashboard from "./Dashboard";
import Suggestions from "./Suggestions";



function BurnoutForm() {
  const [formData, setFormData] = useState({
    screenTime: "",
    nightUsage: "",
    unlocks: "",
    socialTime: "",
    notifications: "",
  });

  const [result, setResult] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        screenTime: Number(formData.screenTime),
        nightUsage: Number(formData.nightUsage),
        unlocks: Number(formData.unlocks),
        socialTime: Number(formData.socialTime),
        notifications: Number(formData.notifications),
      }),
    });

    const data = await response.json();
    setResult(data);
    setSubmittedData({
  screenTime: Number(formData.screenTime),
  nightUsage: Number(formData.nightUsage),
  unlocks: Number(formData.unlocks),
  socialTime: Number(formData.socialTime),
  notifications: Number(formData.notifications),
});

  };
  const getColor = (level) => {
  if (level === "Low") return "green";
  if (level === "Medium") return "orange";
  return "red";
};



  return (
    <div
  style={{
    maxWidth: "700px",
    margin: "40px auto",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    backgroundColor: "#ffffff",
  }}
>


     <h2
  style={{
    textAlign: "center",
    marginBottom: "25px",
    color: "#333",
    fontWeight: "500",
  }}
>
  Enter Mobile Usage Data
</h2>


      <form onSubmit={handleSubmit}>
        <input name="screenTime" placeholder="Screen Time (hours)" onChange={handleChange} style={{
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  }} />
        <input name="nightUsage" placeholder="Night Usage (hours)" onChange={handleChange} style={{
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  }} />
        <input name="unlocks" placeholder="Unlocks per day" onChange={handleChange} style={{
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  }} />
        <input name="socialTime" placeholder="Social Media Time (hours)" onChange={handleChange} style={{
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  }} />
        <input name="notifications" placeholder="Notifications per day" onChange={handleChange} style={{
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  }} />

        <button
  type="submit"
  style={{
    width: "100%",
    padding: "12px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  }}
>
  Analyze Burnout
</button>

      </form>
      <p style={{ marginTop: "20px", fontSize: "12px", color: "gray" }}>
  🔒 We analyze usage behavior only. No personal content is accessed.
</p>

      {result && (
  <div style={{ marginTop: "20px" }}>
    <h3>Burnout Score: {result.burnoutScore}</h3>
    <h3 style={{ color: getColor(result.burnoutLevel) }}>
      Burnout Level: {result.burnoutLevel}
    </h3>
  </div>
)}
{submittedData && result && (
  <Dashboard data={submittedData} result={result} />
)}
{result && <Suggestions level={result.burnoutLevel} />}



    </div>
  );
}


export default BurnoutForm;
