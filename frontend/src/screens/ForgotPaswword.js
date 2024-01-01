import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'
const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      await axios.post('http://localhost:3000/api/users/forgot-password', { email });
      setMessage('Reset password email sent successfully check your mail');
    } catch (error) {
      setMessage('Error sending reset password email');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleForgotPassword}>Send Reset Email</button>
      <p>{message}</p>
    </div>
  );
};

export default ForgotPasswordComponent;