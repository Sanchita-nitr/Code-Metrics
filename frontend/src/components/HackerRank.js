import React from 'react';
import PerformanceChart from '../pages/PerformanceChart';

const HackerRank = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold">HackerRank Performance</h1>
      <PerformanceChart title="HackerRank Performance" data={data} />
    </div>
  );
};

export default HackerRank;