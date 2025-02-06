import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/dashboard`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }

        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {dashboardData ? (
        <div className="mt-4 bg-white p-4 rounded shadow">
          <p><strong>Username:</strong> {dashboardData.username}</p>
          <p><strong>Email:</strong> {dashboardData.email}</p>

          <h2 className="mt-4 text-lg font-semibold">Coding Profiles</h2>
          <ul className="mt-2">
            <li className="p-2 border-b">
              <strong>LeetCode:</strong> {dashboardData.codingProfiles.leetcode.username} <br />
              <strong>Ranking:</strong> {dashboardData.codingProfiles.leetcode.ranking} <br />
              <strong>Problems Solved:</strong> {dashboardData.codingProfiles.leetcode.problemsSolved}
            </li>
            <li className="p-2 border-b">
              <strong>CodeForces:</strong> {dashboardData.codingProfiles.codeforces.username} <br />
              <strong>Rank:</strong> {dashboardData.codingProfiles.codeforces.rank} <br />
              <strong>Rating:</strong> {dashboardData.codingProfiles.codeforces.rating}
            </li>
          </ul>
        </div>
      ) : (
        <p>Loading dashboard...</p>
      )}
    </div>
  );
};

export default Dashboard;
