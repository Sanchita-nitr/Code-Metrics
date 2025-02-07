import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [platform, setPlatform] = React.useState('');
  const [platformUsername, setPlatformUsername] = React.useState('');
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API || 'http://localhost:8000';

  useEffect(() => {
    console.log("API URL:", process.env.REACT_APP_API);
  }, []);
  const createUser = async (username, email, password, confirmPassword) => {
    const response = await fetch(`${API_URL}/api/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: username, email, password, confirmPassword })
    });

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      throw new Error("Invalid response format: " + text);
    }
    return response.json();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("API URL:", process.env.REACT_APP_API);
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const data = await createUser(username, email, password, confirmPassword, platform, platformUsername);
      alert('Sign Up Successful');
      localStorage.setItem('token', data.token);
      navigate(`/dashboard`);
    } catch (error) {
      console.error('Error:', error);
      alert('Sign Up failed: ' + (error.message || 'Please try again'));
    }
  };

  return (
    <form onSubmit={onSubmit} className='flex justify-center items-center min-h-screen'>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className='text-lg font-bold mb-4'>Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="******************"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className='flex justify-center space-x-4'>
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
