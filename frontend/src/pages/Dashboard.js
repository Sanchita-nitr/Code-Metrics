// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import PerformanceChart from './PerformanceChart';
// import StreakTracker from './StreakTracker';
// import Recommendation from './Recommendation';
// import { FaCode, FaUserCircle } from "react-icons/fa";

// const codingPlatforms = [
//   { name: "LeetCode", link: "https://leetcode.com/accounts/login/", color: "bg-blue-500" },
//   { name: "CodeForces", link: "https://codeforces.com/enter", color: "bg-blue-700" },
//   { name: "HackerRank", link: "https://www.hackerrank.com/login", color: "bg-green-500" },
//   { name: "CodeChef", link: "https://www.codechef.com/login", color: "bg-orange-500" },
//   { name: "HackerEarth", link: "https://www.hackerearth.com/users/login/", color: "bg-purple-500" },
// ];

// const Dashboard = () => {
//   const [dashboardData, setDashboardData] = useState({
//     leetcode: [],
//     codeforces: [],
//     codechef: [],
//     hackerrank: [],
//     hackerearth: [],
//     streak: [],
//     recommendations: [],
//     linearPredictions: [],
//     logisticPredictions: [],
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       setLoading(true);
//       try {
//         const token = localStorage.getItem("token");
//         const responses = await Promise.all([
//           axios.get(`${process.env.REACT_APP_API}/api/performance/leetcode`, { headers: { Authorization: `Bearer ${token}` } }),
//           axios.get(`${process.env.REACT_APP_API}/api/performance/codeforces`, { headers: { Authorization: `Bearer ${token}` } }),
//           axios.get(`${process.env.REACT_APP_API}/api/performance/codechef`, { headers: { Authorization: `Bearer ${token}` } }),
//           axios.get(`${process.env.REACT_APP_API}/api/performance/hackerrank`, { headers: { Authorization: `Bearer ${token}` } }),
//           axios.get(`${process.env.REACT_APP_API}/api/performance/hackerearth`, { headers: { Authorization: `Bearer ${token}` } }),
//           axios.get(`${process.env.REACT_APP_API}/api/streak`, { headers: { Authorization: `Bearer ${token}` } }),
//           axios.get(`${process.env.REACT_APP_API}/api/recommendation`, { headers: { Authorization: `Bearer ${token}` } }),
//         ]);

//         const [
//           leetcodeResponse,
//           codeforcesResponse,
//           codechefResponse,
//           hackerrankResponse,
//           hackerearthResponse,
//           streakResponse,
//           recommendationsResponse,
//         ] = responses;

//         setDashboardData({
//           leetcode: leetcodeResponse.data,
//           codeforces: codeforcesResponse.data,
//           codechef: codechefResponse.data,
//           hackerrank: hackerrankResponse.data,
//           hackerearth: hackerearthResponse.data,
//           streak: streakResponse.data,
//           recommendations: recommendationsResponse.data,
//           linearPredictions: leetcodeResponse.data.linearPredictions || [],
//           logisticPredictions: leetcodeResponse.data.logisticPredictions || [],
//         });

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   if (!localStorage.getItem("token")) {
//     alert("Please register first to access this");
//     window.location.href = "/";
//     return null;
//   }

//   if (loading) {
//     return <p className="text-gray-400">Loading...</p>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold flex items-center gap-2">
//           <FaCode className="text-blue-400" /> Code Metrics Dashboard
//         </h1>
//       </div>

//       {/* Login Section */}
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Login to Coding Platforms</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
//           {codingPlatforms.map((platform) => (
//             <PlatformButton
//               key={platform.name}
//               name={platform.name}
//               link={platform.link}
//               color={platform.color}
//             />
//           ))}
//         </div>
//       </div>

//       {/* User Details */}
//       {dashboardData && (
//         <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md">
//           <div className="flex items-center gap-4">
//             <FaUserCircle className="text-5xl text-blue-400" />
//             <div>
//               <p className="text-lg font-bold">{dashboardData.username}</p>
//               <p className="text-gray-400">{dashboardData.email}</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Performance Data */}
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Performance Data</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {["leetcode", "codeforces", "codechef", "hackerrank", "hackerearth"].map((platform) => (
//             <PerformanceChart
//               key={platform}
//               title={`${platform.charAt(0).toUpperCase() + platform.slice(1)} Performance`}
//               data={dashboardData[platform]}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Predictions */}
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Predictions</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           <PerformanceChart title="Linear Regression Predictions" data={dashboardData.linearPredictions} />
//           <PerformanceChart title="Logistic Regression Predictions" data={dashboardData.logisticPredictions} />
//         </div>
//       </div>

//       {/* Streak Tracker */}
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Streak Tracker</h2>
//         <StreakTracker data={dashboardData.streak} />
//       </div>

//       {/* Recommendations */}
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
//         <Recommendation data={dashboardData.recommendations} />
//       </div>
//     </div>
//   );
// };

// // Button Component for Login Links
// const PlatformButton = ({ name, link, color }) => (
//   <a
//     href={link}
//     target="_blank"
//     rel="noopener noreferrer"
//     className={`w-full ${color} text-white py-6 px-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:shadow-2xl hover:opacity-90 transition duration-200`}
//   >
//     <h3 className="text-lg font-semibold">{name}</h3>
//     <p className="text-sm text-gray-200 mt-2 text-center">
//       Track your performance and improve coding skills on {name}.
//     </p>
//     <button
//       className="mt-4 bg-gray-700 text-white py-1 px-3 rounded-md text-sm hover:bg-gray-600"
//     >
//       Visit {name}
//     </button>
//   </a>
// );

// export default Dashboard;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PerformanceChart from './PerformanceChart';
import StreakTracker from './StreakTracker';
import Recommendation from './Recommendation';
import { FaCode, FaUserCircle } from "react-icons/fa";

const codingPlatforms = [
  { name: "LeetCode", link: "https://leetcode.com/accounts/login/", color: "bg-blue-500" },
  { name: "CodeForces", link: "https://codeforces.com/enter", color: "bg-blue-700" },
  { name: "HackerRank", link: "https://www.hackerrank.com/login", color: "bg-green-500" },
  { name: "CodeChef", link: "https://www.codechef.com/login", color: "bg-orange-500" },
  { name: "HackerEarth", link: "https://www.hackerearth.com/users/login/", color: "bg-purple-500" },
];

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    leetcode: [],
    codeforces: [],
    codechef: [],
    hackerrank: [],
    hackerearth: [],
    streak: [],
    recommendations: [],
    linearPredictions: [],
    logisticPredictions: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const responses = await Promise.all([
          axios.get(`${process.env.REACT_APP_API}/api/performance/leetcode`, { headers: { Authorization: `Bearer ${token}` } }),
          axios.get(`${process.env.REACT_APP_API}/api/performance/codeforces`, { headers: { Authorization: `Bearer ${token}` } }),
          axios.get(`${process.env.REACT_APP_API}/api/performance/codechef`, { headers: { Authorization: `Bearer ${token}` } }),
          axios.get(`${process.env.REACT_APP_API}/api/performance/hackerrank`, { headers: { Authorization: `Bearer ${token}` } }),
          axios.get(`${process.env.REACT_APP_API}/api/performance/hackerearth`, { headers: { Authorization: `Bearer ${token}` } }),
          axios.get(`${process.env.REACT_APP_API}/api/streak`, { headers: { Authorization: `Bearer ${token}` } }),
          axios.get(`${process.env.REACT_APP_API}/api/recommendation`, { headers: { Authorization: `Bearer ${token}` } }),
        ]);

        const [
          leetcodeResponse,
          codeforcesResponse,
          codechefResponse,
          hackerrankResponse,
          hackerearthResponse,
          streakResponse,
          recommendationsResponse,
        ] = responses;

        setDashboardData({
          leetcode: leetcodeResponse.data,
          codeforces: codeforcesResponse.data,
          codechef: codechefResponse.data,
          hackerrank: hackerrankResponse.data,
          hackerearth: hackerearthResponse.data,
          streak: streakResponse.data,
          recommendations: recommendationsResponse.data,
          linearPredictions: leetcodeResponse.data.linearPredictions || [],
          logisticPredictions: leetcodeResponse.data.logisticPredictions || [],
        });

        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        // Set sample data for testing
        setDashboardData({
          leetcode: [
            { date: '2023-01-01', problemsSolved: 5 },
            { date: '2023-01-02', problemsSolved: 3 },
            { date: '2023-01-03', problemsSolved: 4 },
          ],
          codeforces: [
            { date: '2023-01-01', problemsSolved: 2 },
            { date: '2023-01-02', problemsSolved: 1 },
            { date: '2023-01-03', problemsSolved: 3 },
          ],
          codechef: [
            { date: '2023-01-01', problemsSolved: 1 },
            { date: '2023-01-02', problemsSolved: 2 },
            { date: '2023-01-03', problemsSolved: 1 },
          ],
          hackerrank: [
            { date: '2023-01-01', problemsSolved: 4 },
            { date: '2023-01-02', problemsSolved: 3 },
            { date: '2023-01-03', problemsSolved: 5 },
          ],
          hackerearth: [
            { date: '2023-01-01', problemsSolved: 3 },
            { date: '2023-01-02', problemsSolved: 4 },
            { date: '2023-01-03', problemsSolved: 2 },
          ],
          streak: [
            { date: '2023-01-01', streak: 1 },
            { date: '2023-01-02', streak: 2 },
            { date: '2023-01-03', streak: 3 },
          ],
          recommendations: [
            { date: '2023-01-01', recommendation: 'Solve more problems on dynamic programming.' },
            { date: '2023-01-02', recommendation: 'Focus on graph algorithms.' },
            { date: '2023-01-03', recommendation: 'Practice more on sorting algorithms.' },
          ],
          linearPredictions: [
            { date: '2023-01-01', prediction: 4 },
            { date: '2023-01-02', prediction: 3 },
            { date: '2023-01-03', prediction: 5 },
          ],
          logisticPredictions: [
            { date: '2023-01-01', prediction: 1 },
            { date: '2023-01-02', prediction: 0 },
            { date: '2023-01-03', prediction: 1 },
          ],
        });
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (!localStorage.getItem("token")) {
    alert("Please register first to access this");
    window.location.href = "/";
    return null;
  }

  if (loading) {
    return <p className="text-gray-400">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <FaCode className="text-blue-400" /> Code Metrics Dashboard
        </h1>
      </div>

      {/* Login Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Login to Coding Platforms</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {codingPlatforms.map((platform) => (
            <PlatformButton
              key={platform.name}
              name={platform.name}
              link={platform.link}
              color={platform.color}
            />
          ))}
        </div>
      </div>

      {/* User Details */}
      {dashboardData && (
        <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <FaUserCircle className="text-5xl text-blue-400" />
            <div>
              <p className="text-lg font-bold">Username</p>
              <p className="text-gray-400">user@example.com</p>
            </div>
          </div>
        </div>
      )}

      {/* Performance Data */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Performance Data</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["leetcode", "codeforces", "codechef", "hackerrank", "hackerearth"].map((platform) => (
            <PerformanceChart
              key={platform}
              title={`${platform.charAt(0).toUpperCase() + platform.slice(1)} Performance`}
              data={dashboardData[platform]}
            />
          ))}
        </div>
      </div>

      {/* Predictions */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Predictions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <PerformanceChart title="Linear Regression Predictions" data={dashboardData.linearPredictions} />
          <PerformanceChart title="Logistic Regression Predictions" data={dashboardData.logisticPredictions} />
        </div>
      </div>

      {/* Streak Tracker */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Streak Tracker</h2>
        <StreakTracker data={dashboardData.streak} />
      </div>

      {/* Recommendations */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
        <Recommendation data={dashboardData.recommendations} />
      </div>
    </div>
  );
};

// Button Component for Login Links
const PlatformButton = ({ name, link, color }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-full ${color} text-white py-6 px-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:shadow-2xl hover:opacity-90 transition duration-200`}
  >
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-gray-200 mt-2 text-center">
      Track your performance and improve coding skills on {name}.
    </p>
    <button
      className="mt-4 bg-gray-700 text-white py-1 px-3 rounded-md text-sm hover:bg-gray-600"
    >
      Visit {name}
    </button>
  </a>
);

export default Dashboard;