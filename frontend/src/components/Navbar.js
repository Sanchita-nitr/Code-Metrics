import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaTachometerAlt, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    // Optionally, you can make a request to the backend to handle server-side logout
    fetch(`${process.env.REACT_APP_API}/api/logout`, {
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
    <nav className='bg-gray-800 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-xl font-bold'>Code Metrics</div>
        <div className='flex space-x-4'>
          <Link to='/' className='flex items-center text-white hover:text-gray-300'>
            <FaHome className='mr-1' /> Home
          </Link>
          <Link to='/dashboard' className='flex items-center text-white hover:text-gray-300'>
            <FaTachometerAlt className='mr-1' /> Dashboard
          </Link>
          <Link to='/login' className='flex items-center text-white hover:text-gray-300'>
            <FaSignInAlt className='mr-1' /> Log In
          </Link>
          <Link to='/signup' className='flex items-center text-white hover:text-gray-300'>
            <FaUserPlus className='mr-1' /> Sign Up
          </Link>
          <button onClick={handleLogout} className='flex items-center text-white hover:text-gray-300'>
            <FaSignOutAlt className='mr-1' /> Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;