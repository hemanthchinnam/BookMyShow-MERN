import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'
const ResetPasswordComponent = () => {
  const [email, setEmail] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      await axios.post('http://localhost:3000/api/users/reset-password', { email, resetToken, newPassword });
      setMessage('Password reset successful');
    } catch (error) {
      setMessage('Invalid or expired token');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Reset Token" onChange={(e) => setResetToken(e.target.value)} />
      <input type="password" placeholder="New Password" onChange={(e) => setNewPassword(e.target.value)} />
      <button onClick={handleResetPassword}>Reset Password</button>
      <p>{message}</p>
    </div>
  );
};

export default ResetPasswordComponent;