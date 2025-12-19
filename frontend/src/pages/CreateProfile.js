import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateProfile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [date, setDate] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleComplete = () => {
    navigate('/home');
  };

  const handleDateClick = () => {
    navigate('/calendar');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="page-container">
      {/* Back Button with Golden Gradient */}
      <svg 
        viewBox="0 0 24 24" 
        fill="none"
        onClick={() => navigate(-1)}
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
          <linearGradient id="backGradientProfile" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC300" />
            <stop offset="100%" stopColor="#FF9934" />
          </linearGradient>
        </defs>
        <path 
          d="M15 18l-6-6 6-6" 
          stroke="url(#backGradientProfile)" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>

      <h1 className="page-title">Create your profile</h1>
      
      {/* Profile Picture Upload Section */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div className="glass-gold" style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            overflow: 'hidden',
            cursor: 'pointer'
          }}
          onClick={() => document.getElementById('profileImageUpload').click()}
          >
            {imagePreview ? (
              <img 
                src={imagePreview} 
                alt="Profile Preview" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <svg viewBox="0 0 24 24" fill="#FFC300" style={{ width: '50px', height: '50px' }}>
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            )}
          </div>
          <div 
            className="glass" 
            style={{ 
              position: 'absolute', 
              bottom: '5px', 
              right: '5px', 
              width: '32px', 
              height: '32px', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            onClick={() => document.getElementById('profileImageUpload').click()}
          >
            <svg viewBox="0 0 24 24" fill="#FFC300" style={{ width: '18px', height: '18px' }}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
            </svg>
          </div>
          <input 
            type="file" 
            id="profileImageUpload" 
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
        </div>
        <div style={{ fontSize: '14px', color: '#AEAEAE', marginTop: '10px' }}>
          {imagePreview ? 'Tap to change photo' : 'Tap to add photo'}
        </div>
      </div>
      
      <div className="input-group" style={{ position: 'relative' }}>
        <label className="label">Username</label>
        <svg 
          className="input-icon" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
        <input
          type="text"
          className="input-field"
          placeholder="Inai user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="input-group" style={{ position: 'relative', marginTop: '30px' }}>
        <label className="label">Date</label>
        <svg 
          className="input-icon" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
        <input
          type="text"
          className="input-field"
          placeholder="mm/dd/yyyy"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          onClick={handleDateClick}
          readOnly
        />
      </div>

      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 40px)', maxWidth: '410px' }}>
        <button className="btn btn-primary" onClick={handleComplete}>
          Complete Profile
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;
