import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CodeForcesDashboard = () => {
  const [performanceData, setPerformanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCodeForcesData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate('/login'); // Redirect to login if no token
        return;
      }
      try {
        const response = await fetch(`${process.env.REACT_APP_API}/api/codeforces`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch Codeforces data");
        }

        const data = await response.json();
        setPerformanceData(data);
      } catch (error) {
        console.error("Error fetching Codeforces data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCodeForcesData();
  }, [navigate]);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${process.env.REACT_APP_API}/api/performance/codeforces`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch performance data");
        }

        const data = await response.json();
        setPerformanceData(data);
      } catch (error) {
        console.error("Error fetching performance data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPerformanceData();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">CodeForces Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-4 bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Performance Metrics</h2>
          <p><strong>Rank:</strong> {performanceData.rank}</p>
          <p><strong>Rating:</strong> {performanceData.rating}</p>
          <p><strong>Problems Solved:</strong> {performanceData.problemsSolved}</p>
        </div>
      )}
    </div>
  );
};

export default CodeForcesDashboard;
