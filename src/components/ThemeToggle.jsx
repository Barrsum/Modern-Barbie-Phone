import React from 'react';

function ThemeToggle({ currentTheme, onToggleTheme }) {
  const buttonText = currentTheme === 'dark' ? '☀️' : '🌑';

  return (
    <button className="theme-toggle" onClick={onToggleTheme}>
      {buttonText}
    </button>
  );
}

// Memoize if it becomes a performance concern, but likely unnecessary here
export default React.memo(ThemeToggle);

// Created by Ram Bapat, www.linkedin.com/in/ram-bapat-barrsum-diamos