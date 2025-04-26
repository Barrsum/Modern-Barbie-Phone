// src/App.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Phone from './components/Phone';
import './App.css'; // App-specific layout styles

// --- Fisher-Yates & Sound Setup (Keep as before) ---
function shuffleArray(array) { /* ... shuffle logic ... */
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const allSoundFiles = ['1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3'];
// --- End Sound Setup ---

const projectName = 'Modern Barbie Phone';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const audioRef = useRef(null);
  const availableSoundsRef = useRef([]);
  const allSoundsRef = useRef(allSoundFiles);

  useEffect(() => {
    availableSoundsRef.current = shuffleArray([...allSoundsRef.current]);
  }, []);

  useEffect(() => {
    // Theme class is now applied in index.css based on variable,
    // but we still need to manage the localStorage part.
    // The class toggle on body can also be kept for potential direct styles.
    document.body.classList.toggle('light-theme', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  const playSound = useCallback(() => {
    // --- Play Sound Logic (Keep as before) ---
    if (!audioRef.current) return;
    if (availableSoundsRef.current.length === 0) {
      availableSoundsRef.current = shuffleArray([...allSoundsRef.current]);
    }
    if (availableSoundsRef.current.length === 0) return;
    const soundToPlay = availableSoundsRef.current.pop();
    const soundSrc = `/sound/${soundToPlay}`;
    audioRef.current.src = soundSrc;
    audioRef.current.play().catch(error => console.error(`Audio play failed for ${soundSrc}:`, error));
    // --- End Play Sound Logic ---
  }, []);

  return (
    // NEW: Main Page Container for Flex Layout
    <div className="page-container">
      <Header
        currentTheme={theme}
        onToggleTheme={handleToggleTheme}
        projectName={projectName}
      />

      {/* NEW: Main Content Area - will grow and center the phone */}
      <main className="main-content">
        <Phone playSound={playSound} />
      </main>

      <Footer />

      {/* Audio Element remains outside visual layout */}
      <audio ref={audioRef} preload="metadata"></audio>
    </div>
  );
}

export default App;

// Created by Ram Bapat, www.linkedin.com/in/ram-bapat-barrsum-diamos