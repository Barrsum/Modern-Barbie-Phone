// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

const projectName = 'Modern Barbie Phone';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/ram-bapat-barrsum-diamos"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          title="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Barrsum/Modern-Barbie-Phone.git" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Source"
          title="GitHub Source"
        >
          <FaGithub />
        </a>
      </div>
      <p className="connect-text">Connect via LinkedIn / View Source on GitHub</p>
      <p className="project-name">{projectName}</p>
      <p className="creator-credit">Created By Ram Bapat</p>
    </footer>
  );
}

export default React.memo(Footer);

// Created by Ram Bapat, www.linkedin.com/in/ram-bapat-barrsum-diamos