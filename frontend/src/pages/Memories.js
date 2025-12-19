import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';

const Memories = () => {
  const navigate = useNavigate();

  const memories = [
    {
      id: 1,
      title: 'Together',
      subtitle: '- Since 2016 -',
      date: '19/06/2016',
      image: 'https://placehold.co/2070x1380',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse "'
    },
    {
      id: 2,
      title: 'Our First Trip',
      date: '12/09/2023',
      image: 'https://placehold.co/2070x1380',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "'
    },
    {
      id: 3,
      title: 'Our First Walk',
      date: '12/07/2023',
      image: 'https://placehold.co/1974x2961',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse "'
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Memories</h1>
      
      <div className="glass-gold" style={{ 
        padding: '5px 20px', 
        borderRadius: '50px', 
        display: 'inline-block', 
        margin: '0 auto 30px', 
        fontSize: '15px', 
        fontWeight: '300', 
        color: '#FF9934',
        textAlign: 'center',
        width: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'underline',
        cursor: 'pointer'
      }} onClick={() => navigate('/calendar')}>
        19/06/2016
      </div>

      {/* Add Button */}
      <div className="glass-gold" style={{
        position: 'absolute',
        right: '25px',
        top: '85px',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }} onClick={() => navigate('/special-day')}>
        <span style={{ fontSize: '15px', color: '#FFC300' }}>+</span>
      </div>

      {/* Horizontal Scrollable Memories */}
      <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '20px' }}>
        {memories.map((memory, index) => (
          <div key={memory.id} className="glass" style={{
            minWidth: '343px',
            height: '464px',
            borderRadius: '50px',
            overflow: 'hidden',
            position: 'relative',
            backgroundImage: `url(${memory.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            {/* Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.9) 100%)',
              backdropFilter: 'blur(2px)'
            }}></div>

            {/* Content */}
            <div style={{ position: 'relative', padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: index === 0 ? '50px' : '35px', 
                  fontWeight: '400', 
                  color: index === 0 ? '#1B0729' : '#ffffff',
                  fontFamily: 'Alex Brush, cursive',
                  marginBottom: '10px'
                }}>
                  {memory.title}
                </div>
                {memory.subtitle && (
                  <div style={{ 
                    fontSize: '25px', 
                    fontWeight: '400', 
                    color: '#1B0729',
                    fontFamily: 'Alex Brush, cursive'
                  }}>
                    {memory.subtitle}
                  </div>
                )}
                {!memory.subtitle && (
                  <div style={{ fontSize: '15px', fontWeight: '700', color: index === 1 ? '#ffffff' : '#ffffff', fontFamily: 'Amatica SC, cursive' }}>
                    {memory.date}
                  </div>
                )}
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '10px', fontWeight: '300', color: '#ffffff', lineHeight: '1.5' }}>
                  {memory.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Events & Todos */}
      <div className="section-title" style={{ marginTop: '30px' }}>Events & Todos</div>
      
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

export default Memories;
