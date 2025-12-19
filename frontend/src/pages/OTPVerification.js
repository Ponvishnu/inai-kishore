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
      {/* Back Button with Golden Gradient */}
      <svg 
        viewBox="0 0 24 24" 
        fill="none"
        onClick={() => navigate(-1)}
        style={{ 
          position: 'absolute', 
          left: '25px', 
          top: '25px', 
          width: '25px', 
          height: '25px', 
          cursor: 'pointer',
          zIndex: 10
        }}
      >
        <defs>
          <linearGradient id="backGradientOTP" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC300" />
            <stop offset="100%" stopColor="#FF9934" />
          </linearGradient>
        </defs>
        <path 
          d="M15 18l-6-6 6-6" 
          stroke="url(#backGradientOTP)" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
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
