import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SpecialDay = () => {
  const navigate = useNavigate();
  const [occasion, setOccasion] = useState('');
  const [date, setDate] = useState('');
  const [countAsFirst, setCountAsFirst] = useState(true);

  const handleDateClick = () => {
    navigate('/calendar');
  };

  return (
    <div className="page-container">
      <svg 
        className="back-button" 
        viewBox="0 0 20 20" 
        fill="#ffffff"
        onClick={() => navigate('/memories')}
        style={{ cursor: 'pointer' }}
      >
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>

      <h1 className="page-title">Special days</h1>

      <div className="section-title" style={{ marginTop: '30px' }}>Select your special day</div>

      <div className="input-group" style={{ position: 'relative' }}>
        <div className="glass" style={{ 
          width: '100%', 
          height: '49px', 
          borderRadius: '15px', 
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer'
        }}>
          <span style={{ color: '#AEAEAE', fontSize: '15px' }}>Select Occasion</span>
          <svg style={{ width: '20px', height: '20px', transform: 'rotate(180deg)' }} viewBox="0 0 20 20" fill="#AEAEAE">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <div className="section-title" style={{ marginTop: '30px' }}>Date</div>

      <div className="input-group" style={{ position: 'relative' }}>
        <div className="glass" style={{ 
          width: '100%', 
          height: '49px', 
          borderRadius: '15px', 
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer'
        }} onClick={handleDateClick}>
          <span style={{ color: '#AEAEAE', fontSize: '15px' }}>mm/dd/yyyy</span>
          <svg style={{ width: '19px', height: '20px' }} viewBox="0 0 20 20" fill="#AEAEAE">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <div className="glass" style={{ borderRadius: '15px', padding: '20px', marginTop: '30px' }}>
        <div className="settings-item" style={{ padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <span className="settings-text">Count as first day</span>
          <div 
            className={`toggle-switch ${countAsFirst ? 'active' : ''}`}
            onClick={() => setCountAsFirst(!countAsFirst)}
          >
            <div className="toggle-thumb"></div>
          </div>
        </div>
        
        <div className="settings-item" style={{ padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <span className="settings-text">Share</span>
          <svg className="settings-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
        </div>
        
        <div className="settings-item" style={{ padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <span className="settings-text">Notify</span>
          <svg className="settings-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        </div>
        
        <div className="settings-item" style={{ padding: '15px 0' }}>
          <span className="settings-text">Alert Time</span>
          <svg className="settings-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Add/Delete Buttons */}
      <div style={{ position: 'absolute', top: '85px', right: '25px', display: 'flex', gap: '10px' }}>
        <div className="glass" style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}>
          <svg style={{ width: '15px', height: '15px' }} viewBox="0 0 20 20" fill="#ffffff">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="glass-gold" style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}>
          <svg style={{ width: '15px', height: '15px' }} viewBox="0 0 20 20" fill="#FFC300">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <div style={{ height: '80px' }}></div>
    </div>
  );
};

export default SpecialDay;
