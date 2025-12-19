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
      <svg 
        className="back-button" 
        viewBox="0 0 20 20" 
        fill="#ffffff"
        onClick={() => navigate('/settings')}
        style={{ cursor: 'pointer' }}
      >
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
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
