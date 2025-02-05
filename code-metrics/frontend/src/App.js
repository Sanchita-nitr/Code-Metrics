// filepath: /Users/sanchita/Documents/Code-Metrics/code-metrics/frontend/src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './auth/LoginForm';
import SignUpForm from './auth/SignUpForm';
import ForgotPasswordForm from './auth/ForgotPasswordForm';
import Home from './pages/Home';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  return token ? <Component {...rest} /> : <Navigate to="/login" />;
};
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/dashboard' element={<PrivateRoute element={Dashboard} />} />
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