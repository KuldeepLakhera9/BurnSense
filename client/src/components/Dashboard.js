import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard({ data, result }) {
  const chartData = {
    labels: [
      "Screen Time",
      "Night Usage",
      "Unlocks",
      "Social Media",
      "Notifications",
    ],
    datasets: [
      {
        label: "Usage Pattern",
        data: [
          data.screenTime,
          data.nightUsage,
          data.unlocks,
          data.socialTime,
          data.notifications,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
   <div
  style={{
    marginTop: "40px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9fafb",
  }}
>

      <h2>Burnout Dashboard</h2>

      <h3>Score: {result.burnoutScore}</h3>
      <h3>Status: {result.burnoutLevel}</h3>

      <div style={{ maxWidth: "600px" }}>
        <Bar data={chartData} />
      </div>
    </div>
  );
}

export default Dashboard;
