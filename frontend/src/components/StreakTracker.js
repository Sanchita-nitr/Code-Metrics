import React from "react";
import { Bar } from "react-chartjs-2";

const StreakTracker = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Daily Coding Streak",
        data: [2, 3, 1, 5, 4, 6, 7],
        backgroundColor: "green",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Streak Tracker</h2>
      <div className="w-full h-64 bg-white shadow-md p-4 rounded">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default StreakTracker;
