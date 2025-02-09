// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import PerformanceChart from './PerformanceChart';
// // import StreakTracker from './StreakTracker';
// // import Recommendation from './Recommendation';
// // import { FaCode, FaUserCircle } from "react-icons/fa";

// // const codingPlatforms = [
// //   { name: "LeetCode", link: "https://leetcode.com/accounts/login/", color: "bg-blue-200" },
// //   { name: "CodeForces", link: "https://codeforces.com/enter", color: "bg-green-200" },
// //   { name: "HackerRank", link: "https://www.hackerrank.com/login", color: "bg-yellow-200" },
// //   { name: "CodeChef", link: "https://www.codechef.com/login", color: "bg-pink-200" },
// //   { name: "HackerEarth", link: "https://www.hackerearth.com/users/login/", color: "bg-purple-200" },
// // ];

// // const Dashboard = () => {
// //   const [dashboardData, setDashboardData] = useState({
// //     leetcode: [],
// //     codeforces: [],
// //     codechef: [],
// //     hackerrank: [],
// //     hackerearth: [],
// //     streak: [],
// //     recommendations: [],
// //     linearPredictions: [],
// //     logisticPredictions: [],
// //   });
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchDashboardData = async () => {
// //       setLoading(true);
// //       try {
// //         const token = localStorage.getItem("token");
// //         console.log("Fetching dashboard data...");

// //         const responses = await Promise.all([
// //           axios.get(`${process.env.REACT_APP_API}/api/performance/leetcode`, { headers: { Authorization: `Bearer ${token}` } }),
// //           axios.get(`${process.env.REACT_APP_API}/api/performance/codeforces`, { headers: { Authorization: `Bearer ${token}` } }),
// //           axios.get(`${process.env.REACT_APP_API}/api/performance/codechef`, { headers: { Authorization: `Bearer ${token}` } }),
// //           axios.get(`${process.env.REACT_APP_API}/api/performance/hackerrank`, { headers: { Authorization: `Bearer ${token}` } }),
// //           axios.get(`${process.env.REACT_APP_API}/api/performance/hackerearth`, { headers: { Authorization: `Bearer ${token}` } }),
// //           axios.get(`${process.env.REACT_APP_API}/api/streak`, { headers: { Authorization: `Bearer ${token}` } }),
// //           axios.get(`${process.env.REACT_APP_API}/api/recommendation`, { headers: { Authorization: `Bearer ${token}` } }),
// //         ]);

// //         const [
// //           leetcodeResponse,
// //           codeforcesResponse,
// //           codechefResponse,
// //           hackerrankResponse,
// //           hackerearthResponse,
// //           streakResponse,
// //           recommendationsResponse,
// //         ] = responses;

// //         setDashboardData({
// //           leetcode: leetcodeResponse.data,
// //           codeforces: codeforcesResponse.data,
// //           codechef: codechefResponse.data,
// //           hackerrank: hackerrankResponse.data,
// //           hackerearth: hackerearthResponse.data,
// //           streak: streakResponse.data,
// //           recommendations: recommendationsResponse.data,
// //           linearPredictions: leetcodeResponse.data.linearPredictions || [],
// //           logisticPredictions: leetcodeResponse.data.logisticPredictions || [],
// //         });

// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching dashboard data:', error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchDashboardData();
// //   }, []);

// //   // Redirect if user is not authenticated
// //   if (!localStorage.getItem("token")) {
// //     alert("Please register first to access this");
// //     window.location.href = "/";
// //     return null;
// //   }

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-900 text-white p-6">
// //       {/* Header */}
// //       <div className="flex justify-between items-center">
// //         <h1 className="text-3xl font-bold flex items-center gap-2">
// //           <FaCode className="text-blue-400" /> Code Metrics Dashboard
// //         </h1>
// //       </div>

// //       {/* Login Section */}
// //       <div className="mt-6">
// //         <h2 className="text-xl font-semibold mb-4">Login to Coding Platforms</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
// //           {codingPlatforms.map((platform) => (
// //             <PlatformButton
// //               key={platform.name}
// //               name={platform.name}
// //               link={platform.link}
// //               color={platform.color}
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       {/* User Details */}
// //       {dashboardData && (
// //         <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md">
// //           <div className="flex items-center gap-4">
// //             <FaUserCircle className="text-5xl text-blue-400" />
// //             <div>
// //               <p className="text-lg font-bold">{dashboardData.username}</p>
// //               <p className="text-gray-400">{dashboardData.email}</p>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Performance Data */}
// //       <div className="mt-6">
// //         <h2 className="text-xl font-semibold mb-2">Performance Data</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //           {["leetcode", "codeforces", "codechef", "hackerrank", "hackerearth"].map((platform) => (
// //             <PerformanceChart
// //               key={platform}
// //               title={`${platform.charAt(0).toUpperCase() + platform.slice(1)} Performance`}
// //               data={dashboardData[platform]}
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       {/* Predictions */}
// //       <div className="mt-6">
// //         <h2 className="text-xl font-semibold mb-2">Predictions</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //           <PerformanceChart title="Linear Regression Predictions" data={dashboardData.linearPredictions} />
// //           <PerformanceChart title="Logistic Regression Predictions" data={dashboardData.logisticPredictions} />
// //         </div>
// //       </div>

// //       {/* Streak Tracker */}
// //       <div className="mt-6">
// //         <h2 className="text-xl font-semibold mb-2">Streak Tracker</h2>
// //         <StreakTracker data={dashboardData.streak} />
// //       </div>

// //       {/* Recommendations */}
// //       <div className="mt-6">
// //         <h2 className="text-xl font-semibold mb-2">Recommendations</h2>
// //         <Recommendation data={dashboardData.recommendations} />
// //       </div>
// //     </div>
// //   );
// // };

// // // Button Component for Login Links
// // const PlatformButton = ({ name, link, color }) => (
// //   <div
// //     className={`w-full ${color} text-gray-800 py-6 px-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:shadow-2xl hover:opacity-90 transition duration-200`}
// //     onClick={() => window.location.href = link}
// //   >
// //     <h3 className="text-lg font-semibold">{name}</h3>
// //     <p className="text-sm text-gray-600 mt-2 text-center">
// //       Track your performance and improve coding skills on {name}.
// //     </p>
// //     <button
// //       className="mt-4 bg-gray-700 text-white py-1 px-3 rounded-md text-sm hover:bg-gray-600"
// //     >
// //       Visit {name}
// //     </button>
// //   </div>
// // );

// // export default Dashboard;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaCode, FaUserCircle } from "react-icons/fa";

// const codingPlatforms = [
//   { name: "LeetCode", link: "/leetcode", color: "bg-blue-200" },
//   { name: "CodeForces", link: "/codeforces", color: "bg-green-200" },
//   { name: "HackerRank", link: "/hackerrank", color: "bg-yellow-200" },
//   { name: "CodeChef", link: "/codechef", color: "bg-pink-200" },
//   { name: "HackerEarth", link: "/hackerearth", color: "bg-purple-200" },
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
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       setLoading(true);
//       try {
//         const token = localStorage.getItem("token");
//         console.log("Fetching dashboard data...");

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

//   // Redirect if user is not authenticated
//   if (!localStorage.getItem("token")) {
//     alert("Please register first to access this");
//     window.location.href = "/";
//     return null;
//   }

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-3xl font-bold flex items-center gap-2">
//           <FaCode className="text-blue-400" /> Code Metrics Dashboard
//         </h1>
//       </div>

//       {/* Login Section */}
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Login to Coding Platforms</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {codingPlatforms.map((platform) => (
//             <PlatformButton
//               key={platform.name}
//               name={platform.name}
//               link={platform.link}
//               color={platform.color}
//               navigate={navigate}
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
//         <h2 className="text-xl font-semibold mb-2">Performance Data</h2>
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
//         <h2 className="text-xl font-semibold mb-2">Predictions</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           <PerformanceChart title="Linear Regression Predictions" data={dashboardData.linearPredictions} />
//           <PerformanceChart title="Logistic Regression Predictions" data={dashboardData.logisticPredictions} />
//         </div>
//       </div>

//       {/* Streak Tracker */}
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-2">Streak Tracker</h2>
//         <StreakTracker data={dashboardData.streak} />
//       </div>

//       {/* Recommendations */}
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-2">Recommendations</h2>
//         <Recommendation data={dashboardData.recommendations} />
//       </div>
//     </div>
//   );
// };

// // Button Component for Login Links
// const PlatformButton = ({ name, link, color, navigate }) => (
//   <div
//     className={`w-full ${color} text-gray-800 py-6 px-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:shadow-2xl hover:opacity-90 transition duration-200`}
//     onClick={() => navigate(link)}
//   >
//     <h3 className="text-lg font-semibold">{name}</h3>
//     <p className="text-sm text-gray-600 mt-2 text-center">
//       Track your performance and improve coding skills on {name}.
//     </p>
//     <button
//       className="mt-4 bg-gray-700 text-white py-1 px-3 rounded-md text-sm hover:bg-gray-600"
//     >
//       Visit {name}
//     </button>
//   </div>
// );

// export default Dashboard;
import React from 'react';
import PerformanceChart from '../pages/PerformanceChart';

const LeetCode = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold">LeetCode Performance</h1>
      <PerformanceChart title="LeetCode Performance" data={data} />
    </div>
  );
};

export default LeetCode;