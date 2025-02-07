
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './auth/LoginForm';
import SignUpForm from './auth/SignUpForm';
import ForgotPasswordForm from './auth/ForgotPasswordForm';
import Home from './pages/Home';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
// import Sidebar from './components/Sidebar';
import CodeTracker from './components/CodeTracker';
import PerformanceChart from './components/PerformanceChart';
import StreakTracker from './components/StreakTracker';
import Recommendation from './components/Recomendation';
import LeetCodeDashboard from './pages/LeetCodeDashboard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* <Sidebar/> */}
        <div className="flex-grow">
          <Routes>
            <Route path="/recommendation" element={<Recommendation />} />
            <Route path="/streakTracker" element={<StreakTracker />} />
            <Route path="/performanceChart" element={<PerformanceChart />} />
            <Route path="/codeTracker" element={<CodeTracker/>} />
            <Route path="/" element={<Home />} />
            <Route path='/leetcodeDashboard' element={<LeetCodeDashboard/>} />
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/login' element={<LoginForm />} />
            <Route path='/signup' element={<SignUpForm />} />
            <Route path='/forgotpassword' element={<ForgotPasswordForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;