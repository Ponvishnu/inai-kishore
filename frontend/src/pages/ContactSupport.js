import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactSupport = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    alert('Support request submitted!');
    navigate('/settings');
  };

  return (
    <div className="page-container">
      {/* Back Button with Golden Gradient */}
      <svg 
        viewBox="0 0 24 24" 
        fill="none"
        onClick={() => navigate('/settings')}
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
          <linearGradient id="backGradientSupport" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC300" />
            <stop offset="100%" stopColor="#FF9934" />
          </linearGradient>
        </defs>
        <path 
          d="M15 18l-6-6 6-6" 
          stroke="url(#backGradientSupport)" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>

      <h1 className="page-title">Contact Support</h1>

      <div className="input-group" style={{ marginTop: '30px' }}>
        <label className="label">Name</label>
        <input
          type="text"
          className="glass"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: '100%',
            height: '49px',
            borderRadius: '15px',
            padding: '0 20px',
            color: '#ffffff',
            fontSize: '15px',
            fontFamily: 'Poppins, sans-serif',
            border: 'none',
            outline: 'none'
          }}
        />
      </div>

      <div className="input-group">
        <label className="label">Email</label>
        <input
          type="email"
          className="glass"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            height: '49px',
            borderRadius: '15px',
            padding: '0 20px',
            color: '#ffffff',
            fontSize: '15px',
            fontFamily: 'Poppins, sans-serif',
            border: 'none',
            outline: 'none'
          }}
        />
      </div>

      <div className="input-group">
        <label className="label">Message</label>
        <textarea
          className="glass"
          placeholder="How can we help you?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          style={{
            width: '100%',
            borderRadius: '15px',
            padding: '15px 20px',
            color: '#ffffff',
            fontSize: '15px',
            fontFamily: 'Poppins, sans-serif',
            border: 'none',
            outline: 'none',
            resize: 'none'
          }}
        />
      </div>

      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 40px)', maxWidth: '410px' }}>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactSupport;
