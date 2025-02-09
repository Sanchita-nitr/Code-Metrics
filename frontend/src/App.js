import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recommendation from './pages/Recommendation';
import StreakTracker from './pages/StreakTracker';
import PerformanceChart from './pages/PerformanceChart';
import CodeTracker from './pages/CodeTracker';
import Dashboard from './pages/Dashboard';
import LoginForm from './auth/LoginForm';
import SignUpForm from './auth/SignUpForm';
import ForgotPasswordForm from './auth/ForgotPasswordForm';
import CodeForces from './components/CodeForces';
import LeetCode from './components/LeetCode';
import HackerRank from './components/HackerRank';
import CodeChef from './components/CodeChef';
import HackerEarth from './components/HackerEarth';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="performanceChart" element={<PerformanceChart />} />
              <Route path="streakTracker" element={<StreakTracker />} />
            </Route>
            <Route path="/recommendation" element={<Recommendation />} />
            <Route path="/codeTracker" element={<CodeTracker />} />
            <Route path="/" element={<Home />} />
            <Route path="/leetcode" element={<LeetCode />} />
            <Route path="/codeforces" element={<CodeForces />} />
            <Route path="/hackerrank" element={<HackerRank />} />
            <Route path="/codechef" element={<CodeChef />} />
            <Route path="/hackerearth" element={<HackerEarth />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/forgotpassword" element={<ForgotPasswordForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;