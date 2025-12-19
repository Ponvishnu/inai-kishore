import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container" style={{ paddingTop: '20px' }}>
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-item" onClick={() => navigate('/settings')}>
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDQ2MQ0M0WMMD9HgsJy%2F1edd978870216ee46b7213168cbd65517d3f0a5eimage.png?alt=media&token=0ac45b7e-8fe1-45ad-870f-e090c7ada31a"
            alt="Jenny"
            className="profile-avatar"
          />
          <span className="profile-name">Jenny</span>
        </div>
        
        <svg className="heart-icon" viewBox="0 0 50 50" fill="url(#heartGradient)">
          <defs>
            <linearGradient id="heartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF1493" />
              <stop offset="100%" stopColor="#8B008B" />
            </linearGradient>
          </defs>
          <path d="M25,45 C25,45 5,30 5,17.5 C5,7.5 12.5,5 17.5,5 C22.5,5 25,10 25,10 C25,10 27.5,5 32.5,5 C37.5,5 45,7.5 45,17.5 C45,30 25,45 25,45 Z" />
        </svg>
        
        <div className="profile-item" onClick={() => navigate('/notification-detail')}>
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDQ2MQ0M0WMMD9HgsJy%2F7d1e9a4e65d6365c0446647eb1895725406d52d2image.png?alt=media&token=31ae9fa4-1ccb-458c-8222-c2565b6ea21c"
            alt="Norris"
            className="profile-avatar"
          />
          <div className="badge">22</div>
          <span className="profile-name">Norris</span>
        </div>
      </div>

      {/* Countdown Timer - Glass Variant */}
      <div className="countdown-container">
        <div className="countdown-box glass-gold">
          <div className="countdown-number">02</div>
          <div className="countdown-label">Months</div>
        </div>
        <span className="countdown-separator">:</span>
        <div className="countdown-box glass-gold">
          <div className="countdown-number">03</div>
          <div className="countdown-label">Days</div>
        </div>
        <span className="countdown-separator">:</span>
        <div className="countdown-box glass-gold">
          <div className="countdown-number">05</div>
          <div className="countdown-label">Hours</div>
        </div>
        <span className="countdown-separator">:</span>
        <div className="countdown-box glass-gold">
          <div className="countdown-number">47</div>
          <div className="countdown-label">Minutes</div>
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: '20px', fontWeight: '400', color: '#ffffff', marginBottom: '30px' }}>
        Jenny's Birthday
      </div>

      {/* Unread Messages */}
      <div className="section-title">Unread Messages</div>
      <div className="card" onClick={() => navigate('/chat')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDQ2MQ0M0WMMD9HgsJy%2F7d1e9a4e65d6365c0446647eb1895725406d52d2image.png?alt=media&token=a0d35ece-6aea-4ad2-860b-36b53ee796a0"
          alt="Norris"
          style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '15px', fontWeight: '600', color: '#ffffff', marginBottom: '5px' }}>Norris</div>
          <div style={{ fontSize: '15px', color: '#ffffff' }}>Do call me once you get...</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '12px', fontWeight: '300', color: '#AEAEAE', marginBottom: '5px' }}>9:41 AM</div>
          <div className="badge" style={{ position: 'static', width: '16px', height: '16px' }}>2</div>
        </div>
      </div>

      {/* Most Used Emojis */}
      <div className="section-title" style={{ marginTop: '30px' }}>Most Used Emojis</div>
      <div className="emoji-list">
        <span className="emoji">💋</span>
        <span className="emoji">☺️</span>
        <span className="emoji">😍</span>
        <span className="emoji">❣️</span>
        <span className="emoji">🫶🏽</span>
        <span className="emoji">😜</span>
        <span className="emoji">💕</span>
        <span className="emoji">😘</span>
      </div>

      {/* This Day on 2024 */}
      <div className="section-title" style={{ marginTop: '30px' }}>This Day on 2024</div>
      <div className="photo-grid">
        <div className="photo-grid-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDQ2MQ0M0WMMD9HgsJy%2F3bb58b27a97952fd93fc3b53e078dc78d4a04a53image.png?alt=media&token=66bc1593-5e42-437d-af94-f8f26fd71e85" alt="Memory" />
        </div>
        <div className="photo-grid-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDQ2MQ0M0WMMD9HgsJy%2F56a3a3ac75eca2cb7d6080a51e2ae53f0539d60aimage.png?alt=media&token=daa0959b-58d7-49c8-892b-f4fc6ab24467" alt="Memory" />
        </div>
        <div className="photo-grid-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDQ2MQ0M0WMMD9HgsJy%2F949484285828ade173231bde8db3a154ac3ad910image.png?alt=media&token=5994fabd-d177-48bb-b9b3-59b94af36044" alt="Memory" />
        </div>
        <div className="photo-grid-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDQ2MQ0M0WMMD9HgsJy%2Fa101cad98d7f2771222d602d541f3ef3accfbe3fimage.png?alt=media&token=8814f137-d538-4d65-916d-6ea5ff283dfc" alt="Memory" />
        </div>
        <div className="photo-grid-item more-photos">
          <div>+4 more<br/>Photos</div>
        </div>
      </div>

      {/* Memories */}
      <div className="section-title" style={{ marginTop: '30px' }}>Memories</div>
      <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
        <div className="memory-card" style={{ minWidth: '200px' }}>
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDQ2MQ0M0WMMD9HgsJy%2F5bcba2c7aa4eabfc86a1ed4c8fc0e96d801bd4eeimage.png?alt=media&token=92aa83eb-ee6a-42cf-a998-75a41b2cf42a"
            alt="Memory"
            className="memory-image"
          />
          <div className="memory-content">
            <div className="memory-title">Our First Walk</div>
            <div className="memory-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</div>
            <div className="memory-date">12/12/24 • 12:00PM</div>
          </div>
        </div>
        <div className="memory-card" style={{ minWidth: '200px' }}>
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDQ2MQ0M0WMMD9HgsJy%2F1574063afe554bb617134475733c68c50b023636image.png?alt=media&token=8e8825a1-4284-4fcf-b6b0-df07c06be938"
            alt="Memory"
            className="memory-image"
          />
          <div className="memory-content">
            <div className="memory-title">Tulip Visit</div>
            <div className="memory-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru</div>
            <div className="memory-date">12/12/24 • 12:00PM</div>
          </div>
        </div>
      </div>

      {/* Todos & Reminders */}
      <div className="section-title" style={{ marginTop: '30px' }}>Todos & Reminders</div>
      <div className="todo-item">
        <div className="todo-icon-wrapper">
          <span className="todo-icon">🌸</span>
        </div>
        <div className="todo-content">
          <div className="todo-title">Give Flowers to GF!</div>
          <div className="todo-time">10:00AM • 12/12/25</div>
        </div>
        <div className="todo-checkbox"></div>
      </div>
      
      <div className="todo-item">
        <div className="todo-icon-wrapper">
          <span className="todo-icon">🌙</span>
        </div>
        <div className="todo-content">
          <div className="todo-title">Moon Gazing</div>
          <div className="todo-time">10:00AM • 12/12/25</div>
        </div>
        <div className="todo-checkbox"></div>
      </div>
      
      <div className="todo-item">
        <div className="todo-icon-wrapper">
          <span className="todo-icon">🌸</span>
        </div>
        <div className="todo-content">
          <div className="todo-title">Give Flowers to GF!</div>
          <div className="todo-time">10:00AM • 12/12/25</div>
        </div>
        <div className="todo-checkbox"></div>
      </div>
      
      <div className="todo-item">
        <div className="todo-icon-wrapper">
          <span className="todo-icon">🌙</span>
        </div>
        <div className="todo-content">
          <div className="todo-title">Moon Gazing</div>
          <div className="todo-time">10:00AM • 12/12/25</div>
        </div>
        <div className="todo-checkbox"></div>
      </div>

      <div style={{ height: '80px' }}></div>

      <BottomNavigation />
    </div>
  );
};

export default Home;