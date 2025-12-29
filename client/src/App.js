import BurnoutForm from "./components/BurnoutForm";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
  BurnSense
</h1>

<p style={{ textAlign: "center", color: "#555", marginBottom: "30px" }}>
  Emotional Burnout Detection using Mobile Usage Patterns
</p>

      <BurnoutForm />
    </div>
  );
}

export default App;
