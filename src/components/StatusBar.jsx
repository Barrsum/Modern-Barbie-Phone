import React, { useState, useEffect } from 'react';

function StatusBar() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      // Time Formatting (e.g., 14:05)
      const timeString = now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false // Adjust as needed
      });
      // Date Formatting (e.g., Fri, Jul 19)
      const dateString = now.toLocaleDateString([], {
          weekday: 'short',
          month: 'short',
          day: 'numeric'
      });
      setTime(timeString);
      setDate(dateString);
    };

    // Initial call
    updateDateTime();

    // Set interval to update every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);

  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="status-bar">
      <span>{time}</span>
      <span>{date}</span>
    </div>
  );
}

export default StatusBar;

// Created by Ram Bapat, www.linkedin.com/in/ram-bapat-barrsum-diamos