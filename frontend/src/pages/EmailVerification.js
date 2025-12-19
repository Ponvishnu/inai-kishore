import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleNext = () => {
    if (email) {
      navigate('/otp-verification');
    }
  };

  const handleVerify = () => {
    // Verify email logic
    alert('Verification email sent!');
  };

  return (
    <div className="page-container">
      <h1 className="page-title">What is your email?</h1>
      
      <div className="input-group" style={{ position: 'relative' }}>
        <label className="label">Email Address</label>
        <svg 
          className="input-icon" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <input
          type="email"
          className="input-field"
          placeholder="inaisample@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 40px)', maxWidth: '410px', display: 'flex', gap: '10px' }}>
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
        <button className="btn btn-secondary" onClick={handleVerify}>
          Verify
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
