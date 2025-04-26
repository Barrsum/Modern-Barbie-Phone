import React from 'react';
import StatusBar from './StatusBar';
import ScreenContent from './ScreenContent';
import BottomBar from './BottomBar';

function Screen({ playSound }) {
  return (
    <div className="screen">
      <StatusBar />
      {/* Pass playSound down */}
      <ScreenContent playSound={playSound} />
      <BottomBar />
    </div>
  );
}

export default Screen;

// Created by Ram Bapat, www.linkedin.com/in/ram-bapat-barrsum-diamos