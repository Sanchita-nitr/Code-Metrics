import React from 'react';
import PerformanceChart from '../pages/PerformanceChart';


const HackerEarth = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold">HackerEarth Performance</h1>
      <PerformanceChart title="HackerEarth Performance" data={data} />
    </div>
  );
};

export default HackerEarth;