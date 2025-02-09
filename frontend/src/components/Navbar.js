import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-bold">
          Code Metrics
        </Link>
        {isAuthenticated && (
          <Link to="/dashboard" className="flex items-center space-x-2">
          </Link>
        )}
      </div>
      <div className="flex items-center space-x-4">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="flex items-center space-x-2">
              <FaSignInAlt /> <span>Login</span>
            </Link>
            <Link to="/signup" className="flex items-center space-x-2">
              <FaUserPlus /> <span>Sign Up</span>
            </Link>
          </>
        ) : (
          <button onClick={handleLogout} className="flex items-center space-x-2">
            <FaSignInAlt /> <span>Logout</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;