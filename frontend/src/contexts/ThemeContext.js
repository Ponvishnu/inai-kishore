import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  purple: {
    id: 'purple',
    name: 'Purple Dream',
    gradient: 'linear-gradient(180deg, #6B1B9A 0%, #1B0729 50%, #000000 100%)'
  },
  pink: {
    id: 'pink',
    name: 'Pink Fantasy',
    gradient: 'linear-gradient(180deg, #E91E63 0%, #7B1FA2 50%, #1B0729 100%)'
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('inai-theme');
    return saved || 'purple';
  });

  useEffect(() => {
    localStorage.setItem('inai-theme', currentTheme);
    document.body.style.background = themes[currentTheme].gradient;
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  }, [currentTheme]);

  const changeTheme = (themeId) => {
    setCurrentTheme(themeId);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
