import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '']);

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto focus next input
      if (value && index < 4) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleNext = () => {
    navigate('/mobile-verification');
  };

  const handleVerify = () => {
    if (otp.every(digit => digit !== '')) {
      navigate('/mobile-verification');
    }
  };

  return (
    <div className="page-container">
      <svg 
        className="back-button" 
        viewBox="0 0 20 20" 
        fill="#ffffff"
        onClick={() => navigate(-1)}
        style={{ cursor: 'pointer' }}
      >
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>

      <h1 className="page-title">Verify your email</h1>
      
      <div className="input-group">
        <label className="label">Verification code</label>
        <div className="otp-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              className="otp-input"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              maxLength={1}
            />
          ))}
        </div>
      </div>

      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 40px)', maxWidth: '410px', display: 'flex', gap: '10px' }}>
        <button className="btn btn-secondary" onClick={handleNext}>
          Next
        </button>
        <button className="btn btn-primary" onClick={handleVerify}>
          Verify
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
