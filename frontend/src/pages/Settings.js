import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';
import ThemeSelector from '../components/ThemeSelector';

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <svg 
        className="back-button" 
        viewBox="0 0 20 20" 
        fill="#ffffff"
        onClick={() => navigate('/home')}
        style={{ cursor: 'pointer' }}
      >
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>

      <h1 className="page-title">Settings</h1>

      {/* Profile Picture */}
      <div style={{ textAlign: 'center', marginBottom: '30px', position: 'relative' }} onClick={() => navigate('/share-code')}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div className="glass-gold" style={{ width: '135px', height: '135px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDQ2MQ0M0WMMD9HgsJy%2F1edd978870216ee46b7213168cbd65517d3f0a5eimage.png?alt=media&token=904462ff-f725-4d98-9cc2-58853bc60a3a"
              alt="Profile"
              style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
            />
          </div>
          <div className="glass" style={{ 
            position: 'absolute', 
            bottom: '5px', 
            right: '5px', 
            width: '24px', 
            height: '24px', 
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
            <svg viewBox="0 0 20 20" fill="#ffffff" style={{ width: '15px', height: '15px' }}>
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Account Section */}
      <div className="section-title">Account</div>
      <div className="glass" style={{ borderRadius: '15px', overflow: 'hidden', marginBottom: '20px' }}>
        <div className="settings-item" style={{ borderRadius: '15px 15px 0 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }} onClick={() => navigate('/settings')}>
          <svg className="settings-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <span className="settings-text">Profile</span>
          <svg className="settings-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="settings-item" style={{ borderRadius: '0px 0px 0 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }} onClick={() => navigate('/your-relationship')}>
          <svg className="settings-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span className="settings-text">Your Relationships</span>
          <svg className="settings-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="settings-item" style={{ borderRadius: '0 0 15px 15px' }} onClick={() => navigate('/notifications')}>
          <svg className="settings-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <span className="settings-text">Notifications</span>
          <svg className="settings-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Legal & Support Section */}
      <div className="section-title">Legal & Support</div>
      <div className="glass" style={{ borderRadius: '15px', overflow: 'hidden', marginBottom: '20px' }}>
        <div className="settings-item" style={{ borderRadius: '15px 15px 0 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }} onClick={() => navigate('/contact-support')}>
          <svg className="settings-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="settings-text">Contact Support</span>
          <svg className="settings-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="settings-item" style={{ borderRadius: '0px 0px 0 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <svg className="settings-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          <span className="settings-text">How to use Inai</span>
          <svg className="settings-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="settings-item" style={{ borderRadius: '0 0 15px 15px' }} onClick={() => navigate('/policy')}>
          <svg className="settings-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          <span className="settings-text">Policies</span>
          <svg className="settings-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Theme Selector */}
      <ThemeSelector />

      {/* Logout */}
      <div className="glass" style={{ borderRadius: '15px', padding: '15px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }} onClick={() => navigate('/email-verification')}>
        <svg className="settings-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
        </svg>
        <span className="settings-text">Logout</span>
        <svg className="settings-arrow" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </div>

      <div style={{ height: '80px' }}></div>

      <BottomNavigation />
    </div>
  );
};

export default Settings;
