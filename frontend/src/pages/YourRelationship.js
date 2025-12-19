import React from 'react';
import { useNavigate } from 'react-router-dom';

const YourRelationship = () => {
  const navigate = useNavigate();

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

      <h1 className="page-title">Your Relationship</h1>

      <div className="glass" style={{ borderRadius: '15px', padding: '20px', marginTop: '30px' }}>
        <div className="settings-item" style={{ padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }} onClick={() => navigate('/relationship-status')}>
          <svg className="settings-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span className="settings-text">Relationship Status</span>
          <svg className="settings-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        
        <div className="settings-item" style={{ padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <svg className="settings-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span className="settings-text">Anniversary Date</span>
          <svg className="settings-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        
        <div className="settings-item" style={{ padding: '15px 0' }}>
          <svg className="settings-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <span className="settings-text">Partner Info</span>
          <svg className="settings-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default YourRelationship;
