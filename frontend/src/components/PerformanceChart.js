import React from "react";
import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

const PerformanceChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Coding Hours",
        data: [5, 10, 15, 20, 25],
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
      },
    ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

return (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Performance Chart</h2>
    <div className="w-full h-64 bg-white shadow-md p-4 rounded">
      <Line data={data} options={options} />
    </div>
  </div>
);
};

export default PerformanceChart
