// filepath: /Users/sanchita/Documents/Code-Metrics/code-metrics/frontend/src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    // Optionally, you can make a request to the backend to handle server-side logout
    fetch('http://localhost:8000/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      // Redirect to the home page after logout
      navigate('/');
    });
  };

  return (
    <div className='bg-gray-800 text-white p-4 text-center'>
      Code Metrics
      <div>
        <Link to='/' className='text-white hover:text-gray-300'>Home</Link>
        <Link to='/dashboard' className='text-white hover:text-gray-300'>Dashboard</Link>
        <Link to='/login' className='text-white hover:text-gray-300'>Log In</Link>
        <Link to='/signup' className='text-white hover:text-gray-300'>Sign Up</Link>
        <button onClick={handleLogout} className='text-white hover:text-gray-300'>Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;