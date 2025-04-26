import React, { useCallback } from 'react';

function Icon({ appName, iconClass, label, playSound }) {

  // Use useCallback to potentially optimize if playSound prop changes often
  // though in this setup it's stable from App.jsx
  const handleClick = useCallback(() => {
    console.log(`Icon clicked: ${appName}`);
    playSound(); // Call the function passed from App
  }, [appName, playSound]);

  return (
    <div className="icon" onClick={handleClick} data-app={appName}>
      <i className={iconClass}></i>
      <span>{label}</span>
    </div>
  );
}

// Memoize Icon component as it might be rendered many times
export default React.memo(Icon);

// Created by Ram Bapat, www.linkedin.com/in/ram-bapat-barrsum-diamos