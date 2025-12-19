import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSelector = () => {
  const { currentTheme, changeTheme, themes } = useTheme();

  return (
    <div className="glass" style={{ borderRadius: '15px', padding: '20px', marginBottom: '20px' }}>
      <div style={{ marginBottom: '15px' }}>
        <svg className="settings-icon" viewBox="0 0 20 20" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '10px' }}>
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H4zm0 2h8v11H4V4zm10 0v11a2 2 0 01-2 2h8a2 2 0 002-2V4a2 2 0 00-2-2h-6z" clipRule="evenodd" />
        </svg>
        <span className="settings-text" style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff' }}>Background Theme</span>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        {Object.values(themes).map((theme) => (
          <div
            key={theme.id}
            onClick={() => changeTheme(theme.id)}
            style={{
              cursor: 'pointer',
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              border: currentTheme === theme.id ? '2px solid #FFC300' : '2px solid transparent',
              transition: 'all 0.3s ease',
              boxShadow: currentTheme === theme.id ? '0 0 20px rgba(255, 195, 0, 0.5)' : 'none'
            }}
          >
            {/* Theme Preview */}
            <div
              style={{
                height: '100px',
                background: theme.gradient,
                position: 'relative'
              }}
            >
              {/* Glass overlay to show the effect */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
                height: '30px',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ width: '60%', height: '8px', background: 'rgba(255, 255, 255, 0.3)', borderRadius: '4px' }}></div>
              </div>
            </div>
            
            {/* Theme Name */}
            <div
              style={{
                padding: '10px',
                textAlign: 'center',
                background: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: '600', color: '#ffffff' }}>{theme.name}</div>
            </div>
            
            {/* Selected Indicator */}
            {currentTheme === theme.id && (
              <div
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '24px',
                  height: '24px',
                  background: '#FFC300',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 10px rgba(255, 195, 0, 0.75)'
                }}
              >
                <svg viewBox="0 0 20 20" fill="#1B0729" style={{ width: '16px', height: '16px' }}>
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
