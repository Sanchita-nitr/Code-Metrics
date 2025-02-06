import React from "react";

const Recommendation = () => {
  const recommendations = [
    "Practice Data Structures and Algorithms daily.",
    "Build a real-world project to enhance skills.",
    "Participate in coding competitions.",
    "Learn a new programming language.",
    "Work on open-source projects.",
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
      <ul className="list-disc ml-6 text-gray-700">
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
