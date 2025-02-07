import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaSignOutAlt, FaTachometerAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <Link to="/" className="flex items-center">
            <FaHome /> Home
          </Link>
          <Link to="/dashboard" className="flex items-center">
            <FaTachometerAlt /> Dashboard
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/login" className='flex items-center'>
            <FaSignInAlt /> Login
          </Link>
          <Link to="/signup" className="flex items-center">
            <FaUserPlus /> Sign Up
          </Link>
          <Link to="/logout" className="flex items-center" onClick={() => { localStorage.removeItem("token"); window.location.href = '/' }}>
            <FaSignOutAlt /> Logout
          </Link>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
