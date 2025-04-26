import React from 'react';
import Icon from './Icon';

// Define icon data directly here or fetch/import it
const iconData = [
    { id: 'msg', appName: 'Messages', iconClass: 'fas fa-comment-dots', label: 'Messages' },
    { id: 'photo', appName: 'Photos', iconClass: 'fas fa-image', label: 'Photos' },
    { id: 'cam', appName: 'Camera', iconClass: 'fas fa-camera-retro', label: 'Camera' },
    { id: 'set', appName: 'Settings', iconClass: 'fas fa-cog', label: 'Settings' },
    { id: 'music', appName: 'Music', iconClass: 'fas fa-music', label: 'Music' },
    { id: 'mail', appName: 'Mail', iconClass: 'fas fa-envelope', label: 'Mail' },
    { id: 'browse', appName: 'Browser', iconClass: 'fas fa-compass', label: 'Browser' },
    { id: 'clock', appName: 'Clock', iconClass: 'fas fa-clock', label: 'Clock' },
    { id: 'calc', appName: 'Calculator', iconClass: 'fas fa-calculator', label: 'Calculator' },
    { id: 'maps', appName: 'Maps', iconClass: 'fas fa-map-location-dot', label: 'Maps' },
    { id: 'weather', appName: 'Weather', iconClass: 'fas fa-cloud-sun', label: 'Weather' },
    { id: 'store', appName: 'Store', iconClass: 'fas fa-store', label: 'Store' },
    // { id: 'notes', appName: 'Notes', iconClass: 'fas fa-sticky-note', label: 'Notes' },
    // { id: 'remind', appName: 'Reminders', iconClass: 'fas fa-list-check', label: 'Reminders' },
    // { id: 'podcast', appName: 'Podcasts', iconClass: 'fas fa-podcast', label: 'Podcasts' },
    // { id: 'health', appName: 'Health', iconClass: 'fas fa-heart-pulse', label: 'Health' },
    // Add more icons if needed
];

function IconGrid({ playSound }) {
  return (
    // Make sure this div has the correct class name
    <div className="app-grid">
      {iconData.map(iconInfo => (
        <Icon
          key={iconInfo.id} // Important for React lists
          appName={iconInfo.appName}
          iconClass={iconInfo.iconClass}
          label={iconInfo.label}
          playSound={playSound} // Pass the function
        />
      ))}
    </div>
  );
}

export default IconGrid;

// Created by Ram Bapat, www.linkedin.com/in/ram-bapat-barrsum-diamos