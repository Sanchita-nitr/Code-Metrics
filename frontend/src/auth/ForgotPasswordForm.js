import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API}/api/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Password reset successful');
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
    <form onSubmit={handleSubmit} className='flex justify-center items-center h-screen'>
      <div className='bg-white p-8 rounded-lg shadow-md w-96'>
        <h2 className='text-lg font-bold mb-4'>Forgot Password</h2>
        <div className='mb-4'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className='w-full p-2 mb-4 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <input
            type='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder='New Password'
            className='w-full p-2 mb-4 border rounded'
            required
          />
        </div>
        <div className='flex justify-center'>
          <button
            className='bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
