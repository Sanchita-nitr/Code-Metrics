import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordForm = () => {
  const [email, setEmail] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API || 'http://localhost:8000';

  useEffect(() => {
    console.log("API URL:", process.env.REACT_APP_API);
  }, []);

  const forgotUser = async (email, newPassword) => {
    const response = await fetch(`${API_URL}/api/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, newPassword }),
    });

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      throw new Error("Invalid response format: " + text);
    }

    const data = await response.json();
    return { data, response };
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("API URL:", process.env.REACT_APP_API);
    try {
      const { data, response } = await forgotUser(email, newPassword);
      if (response.ok) {
        alert("Password reset successfully");
        navigate('/login');
      } else {
        alert(data.error || 'An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while resetting the password');
    }
  };

  return (
    <form onSubmit={onSubmit} className='flex justify-center items-center min-h-screen'>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className='text-lg font-bold mb-4'>Forgot Password</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
            New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="newPassword"
            type="password"
            placeholder="******************"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className='flex justify-center space-x-4'>
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;