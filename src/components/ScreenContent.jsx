import React from 'react';
import IconGrid from './IconGrid';

function ScreenContent({ playSound }) {
  return (
    <div className="screen-content">
      {/* Pass playSound down */}
      <IconGrid playSound={playSound} />
    </div>
  );
}

export default ScreenContent;

// Created by Ram Bapat, www.linkedin.com/in/ram-bapat-barrsum-diamos