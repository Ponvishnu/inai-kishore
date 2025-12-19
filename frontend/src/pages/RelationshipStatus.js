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
      {/* Back Button with Golden Gradient */}
      <svg 
        viewBox="0 0 24 24" 
        fill="none"
        onClick={() => navigate('/your-relationship')}
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
          <linearGradient id="backGradientRS" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC300" />
            <stop offset="100%" stopColor="#FF9934" />
          </linearGradient>
        </defs>
        <path 
          d="M15 18l-6-6 6-6" 
          stroke="url(#backGradientRS)" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
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
