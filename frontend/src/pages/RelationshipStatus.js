import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RelationshipStatus = () => {
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState('dating');

  const statuses = [
    { id: 'single', label: 'Single', emoji: '💔' },
    { id: 'dating', label: 'Dating', emoji: '💑' },
    { id: 'engaged', label: 'Engaged', emoji: '💍' },
    { id: 'married', label: 'Married', emoji: '💒' },
  ];

  return (
    <div className="page-container">
      <svg 
        className="back-button" 
        viewBox="0 0 20 20" 
        fill="#ffffff"
        onClick={() => navigate('/your-relationship')}
        style={{ cursor: 'pointer' }}
      >
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>

      <h1 className="page-title">Relationship Status</h1>

      <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {statuses.map((status) => (
          <div
            key={status.id}
            className={selectedStatus === status.id ? 'glass-gold' : 'glass'}
            style={{
              padding: '20px',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => setSelectedStatus(status.id)}
          >
            <span style={{ fontSize: '40px' }}>{status.emoji}</span>
            <span style={{ fontSize: '18px', fontWeight: '500', color: '#ffffff' }}>{status.label}</span>
            {selectedStatus === status.id && (
              <svg style={{ marginLeft: 'auto', width: '24px', height: '24px' }} viewBox="0 0 20 20" fill="#FFC300">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 40px)', maxWidth: '410px' }}>
        <button className="btn btn-primary" onClick={() => navigate('/your-relationship')}>
          Save Status
        </button>
      </div>
    </div>
  );
};

export default RelationshipStatus;
