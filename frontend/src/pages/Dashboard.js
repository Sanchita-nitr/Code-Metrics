import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${process.env.REACT_APP_API}/api/dashboard`, {
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

  // Check if the user is registered
  if (!localStorage.getItem("token")) {
    alert("Please register first to access this");
    window.location.href = '/';
    return null; // Prevent rendering the rest of the component
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Login to Coding Platforms</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={() => window.location.href = 'https://leetcode.com/accounts/login/'}>
          Login to LeetCode
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => window.location.href = 'https://codeforces.com/enter'}>
          Login to Codeforces
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => window.location.href = 'https://www.hackerrank.com/login'}>
          Login to HackerRank
        </button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded" onClick={() => window.location.href = 'https://www.codechef.com/login'}>
          Login to CodeChef
        </button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={() => window.location.href = 'https://www.hackerearth.com/users/login/'}>
          Login to HackerEarth
        </button>
      </div>
      {dashboardData && dashboardData.codingProfiles ? (
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
            <li className="p-2 border-b">
              <strong>CodeChef:</strong> {dashboardData.codingProfiles.codechef.username} <br />
              <strong>Ranking:</strong> {dashboardData.codingProfiles.codechef.ranking} <br />
              <strong>Problems Solved:</strong> {dashboardData.codingProfiles.codechef.problemsSolved}
            </li>
            <li className="p-2 border-b">
              <strong>HackerRank:</strong> {dashboardData.codingProfiles.hackerrank.username} <br />
              <strong>Ranking:</strong> {dashboardData.codingProfiles.hackerrank.ranking} <br />
              <strong>Problems Solved:</strong> {dashboardData.codingProfiles.hackerrank.problemsSolved}
            </li>
            <li className="p-2 border-b">
              <strong>HackerEarth:</strong> {dashboardData.codingProfiles.hackerearth.username} <br />
              <strong>Ranking:</strong> {dashboardData.codingProfiles.hackerearth.ranking} <br />
              <strong>Problems Solved:</strong> {dashboardData.codingProfiles.hackerearth.problemsSolved}
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
