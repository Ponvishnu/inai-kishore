import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MobileVerification = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');

  const handleNext = () => {
    if (mobile) {
      navigate('/create-profile');
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

      <h1 className="page-title">What is your mobile number?</h1>
      
      <div className="input-group" style={{ position: 'relative' }}>
        <label className="label">Mobile Number</label>
        <svg 
          className="input-icon" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <input
          type="tel"
          className="input-field"
          placeholder="+91 1234567890"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>

      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 40px)', maxWidth: '410px' }}>
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MobileVerification;
