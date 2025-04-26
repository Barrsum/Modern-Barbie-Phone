// src/components/Header.jsx
import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

function Header({ currentTheme, onToggleTheme, projectName }) {
  return (
    <header className="app-header">
      {/* Wrap Title and Credit in a div */}
      <div className="header-info">
        <h1 className="header-title">{projectName}</h1>
        {/* Use a paragraph or span for the credit line for better semantics */}
        <p className="creator-credit-header">- Created by Ram Bapat -</p>
      </div>

      {/* Theme toggle remains a direct child */}
      <ThemeToggle currentTheme={currentTheme} onToggleTheme={onToggleTheme} />
    </header>
  );
}

export default React.memo(Header);

// Created by Ram Bapat, www.linkedin.com/in/ram-bapat-barrsum-diamos