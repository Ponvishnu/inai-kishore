import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';

const Notifications = () => {
  const navigate = useNavigate();

  const notifications = [
    { id: 1, type: 'event', title: 'Event: Star Gazing', time: '10:00AM • 12/12/25', date: 'Today' },
    { id: 2, type: 'todo', title: 'Todo: Give flowers to GF! <3', time: '10:00AM • 12/12/25', date: 'Today' },
    { id: 3, type: 'event', title: 'Event: Star Gazing', time: '10:00AM • 12/12/25', date: 'Yesterday' },
    { id: 4, type: 'todo', title: 'Todo: Give flowers to GF! <3', time: '10:00AM • 12/12/25', date: 'Yesterday' },
    { id: 5, type: 'event', title: 'Event: Star Gazing', time: '10:00AM • 12/12/25', date: '23/12/25' },
    { id: 6, type: 'todo', title: 'Todo: Give flowers to GF! <3', time: '10:00AM • 12/12/25', date: '23/12/25' },
    { id: 7, type: 'event', title: 'Event: Star Gazing', time: '10:00AM • 12/12/25', date: '23/11/25' },
    { id: 8, type: 'todo', title: 'Todo: Give flowers to GF! <3', time: '10:00AM • 12/12/25', date: '23/11/25' },
  ];

  let currentDate = '';

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
          <linearGradient id="backGradientNotif" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC300" />
            <stop offset="100%" stopColor="#FF9934" />
          </linearGradient>
        </defs>
        <path 
          d="M15 18l-6-6 6-6" 
          stroke="url(#backGradientNotif)" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>

      <h1 className="page-title">Notifications</h1>

      <div style={{ marginTop: '30px' }}>
        {notifications.map((notification) => {
          const showDate = currentDate !== notification.date;
          currentDate = notification.date;
          
          return (
            <div key={notification.id}>
              {showDate && (
                <div style={{ textAlign: 'center', fontSize: '15px', fontWeight: '300', color: '#AEAEAE', margin: '20px 0 15px' }}>
                  {notification.date}
                </div>
              )}
              <div className="glass" style={{ 
                padding: '15px', 
                borderRadius: '15px', 
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <div style={{
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  background: 'rgba(81, 39, 0, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '15px' }}>{notification.type === 'event' ? '⭐' : '🌸'}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', color: '#ffffff', marginBottom: '5px' }}>
                    <span style={{ fontWeight: '600' }}>{notification.title.split(':')[0]}:</span>
                    <span style={{ fontWeight: '400' }}>{notification.title.split(':')[1]}</span>
                  </div>
                  <div style={{ fontSize: '10px', fontWeight: '300', color: '#ffffff' }}>
                    {notification.time}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ height: '80px' }}></div>

      <BottomNavigation />
    </div>
  );
};

export default Notifications;
