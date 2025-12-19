import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';

const NotificationDetail = () => {
  const navigate = useNavigate();

  const notifications = [
    { id: 1, type: 'event', title: 'Event: Partner\'s Birthday', time: '10:00AM • 12/12/25', date: 'Today' },
    { id: 2, type: 'todo', title: 'Todo: Anniversary Celebration', time: '10:00AM • 12/12/25', date: 'Today' },
    { id: 3, type: 'event', title: 'Event: Monthly Date Night', time: '10:00AM • 12/12/25', date: 'Yesterday' },
  ];

  let currentDate = '';

  return (
    <div className="page-container">
      {/* Back Button with Golden Gradient */}
      <svg 
        viewBox="0 0 24 24" 
        fill="none"
        onClick={() => navigate('/home')}
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
          <linearGradient id="backGradientND" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC300" />
            <stop offset="100%" stopColor="#FF9934" />
          </linearGradient>
        </defs>
        <path 
          d="M15 18l-6-6 6-6" 
          stroke="url(#backGradientND)" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>

      <h1 className="page-title">Partner Notifications</h1>

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
                  <span style={{ fontSize: '15px' }}>{notification.type === 'event' ? '🎂' : '🎉'}</span>
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

export default NotificationDetail;
