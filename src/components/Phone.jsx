import React from 'react';
import Notch from './Notch';
import Screen from './Screen';

function Phone({ playSound }) {
  return (
    <div className="phone">
      <Notch />
      {/* Pass playSound down */}
      <Screen playSound={playSound} />
    </div>
  );
}

export default Phone;

// Created by Ram Bapat, www.linkedin.com/in/ram-bapat-barrsum-diamos