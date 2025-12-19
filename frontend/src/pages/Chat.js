import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';

const Chat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const messages = [
    { id: 1, text: 'Hello! How are you!', sender: 'partner', time: '12:40 AM' },
    { id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', sender: 'partner', time: '12:40 AM' },
    { id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', sender: 'user', time: '12:41 AM' },
    { id: 4, text: 'Hello! How are you!', sender: 'partner', time: '12:42 AM' },
    { id: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', sender: 'partner', time: '12:42 AM' },
    { id: 6, text: 'I LOVE YOU! ❤✨', sender: 'user', time: '12:43 AM' },
    { id: 7, text: '❤✨💕🖤', sender: 'user', time: '12:43 AM' },
    { id: 8, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', sender: 'partner', time: '12:44 AM' },
  ];

  return (
    <div className="page-container" style={{ paddingTop: '80px' }}>
      <svg 
        className="back-button" 
        viewBox="0 0 20 20" 
        fill="#ffffff"
        onClick={() => navigate('/home')}
        style={{ cursor: 'pointer', top: '85px' }}
      >
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>

      {/* Call Icons in Top Right Corner */}
      <div style={{ position: 'absolute', top: '25px', right: '25px', display: 'flex', gap: '15px', zIndex: 10 }}>
        {/* Voice Call Icon */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#FFC300" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: '22px', height: '22px', cursor: 'pointer' }}
          onClick={() => alert('Voice call initiated')}
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>

        {/* Video Call Icon */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#FFC300" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: '22px', height: '22px', cursor: 'pointer' }}
          onClick={() => alert('Video call initiated')}
        >
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      </div>

      <h1 className="page-title" style={{ marginBottom: '10px' }}>Norris</h1>
      
      <div className="glass" style={{ padding: '5px 20px', borderRadius: '50px', display: 'inline-block', margin: '0 auto 30px', fontSize: '15px', fontWeight: '300', color: '#AEAEAE', textAlign: 'center', width: 'fit-content', display: 'flex', justifyContent: 'center' }}>
        12:40 AM
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '80px' }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '75%',
              background: msg.sender === 'user' 
                ? 'radial-gradient(circle, rgba(255, 195, 0, 0.25) 0%, rgba(255, 153, 52, 0.1) 100%)'
                : 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
              backdropFilter: 'blur(10px)',
              border: `0.5px solid ${msg.sender === 'user' ? 'rgba(255, 154, 52, 0.5)' : 'rgba(255, 255, 255, 0.5)'}`,
              borderRadius: msg.sender === 'user' ? '25px 25px 5px 25px' : '25px 25px 25px 5px',
              padding: '12px 18px',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: '300'
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="glass" style={{ 
        position: 'fixed', 
        bottom: '90px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: 'calc(100% - 50px)', 
        maxWidth: '400px', 
        borderRadius: '50px', 
        padding: '8px 15px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <div className="glass-gold" style={{ width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: '15px' }}>➕</span>
        </div>
        
        {/* File Upload Icon */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#AEAEAE" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: '20px', height: '20px', cursor: 'pointer', flexShrink: 0 }}
          onClick={() => document.getElementById('fileUpload').click()}
        >
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
        </svg>
        <input 
          type="file" 
          id="fileUpload" 
          style={{ display: 'none' }}
          onChange={(e) => {
            if (e.target.files.length > 0) {
              alert(`File selected: ${e.target.files[0].name}`);
            }
          }}
        />
        
        <input
          type="text"
          placeholder="Type your heart <3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#ffffff',
            fontSize: '15px',
            fontFamily: 'Poppins, sans-serif'
          }}
        />
        <svg viewBox="0 0 20 20" fill="#FFC300" style={{ width: '17px', height: '15px', cursor: 'pointer' }}>
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      </div>

      
    </div>
  );
};

export default Chat;
