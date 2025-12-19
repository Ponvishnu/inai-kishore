import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShareCode = () => {
  const navigate = useNavigate();
  const [code] = useState('INAI2024XYZ');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join me on Inai',
        text: `Use my code: ${code}`,
        url: window.location.origin
      });
    }
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

      <h1 className="page-title">Share Your Code</h1>

      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <svg viewBox="0 0 100 100" style={{ width: '150px', height: '150px', margin: '0 auto 30px' }}>
          <defs>
            <linearGradient id="qrGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFC300" />
              <stop offset="100%" stopColor="#FF9934" />
            </linearGradient>
          </defs>
          <rect x="10" y="10" width="80" height="80" fill="url(#qrGradient)" opacity="0.3" rx="5" />
          <rect x="20" y="20" width="15" height="15" fill="#FFC300" />
          <rect x="20" y="65" width="15" height="15" fill="#FFC300" />
          <rect x="65" y="20" width="15" height="15" fill="#FFC300" />
          <rect x="45" y="45" width="10" height="10" fill="#FF9934" />
        </svg>

        <div className="glass-gold" style={{
          padding: '20px',
          borderRadius: '15px',
          marginBottom: '20px',
          maxWidth: '300px',
          margin: '0 auto 20px'
        }}>
          <div style={{ fontSize: '12px', fontWeight: '300', color: '#AEAEAE', marginBottom: '10px' }}>
            Your Unique Code
          </div>
          <div style={{ fontSize: '24px', fontWeight: '600', color: '#FFC300', letterSpacing: '2px' }}>
            {code}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '30px' }}>
          <button 
            className="btn btn-primary" 
            onClick={handleCopy}
            style={{ maxWidth: '150px' }}
          >
            {copied ? '✓ Copied!' : 'Copy Code'}
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={handleShare}
            style={{ maxWidth: '150px' }}
          >
            Share Link
          </button>
        </div>

        <div style={{ marginTop: '40px', fontSize: '14px', color: '#AEAEAE', lineHeight: '1.8' }}>
          Share this code with your partner to connect<br />
          and start your journey together on Inai
        </div>
      </div>
    </div>
  );
};

export default ShareCode;
