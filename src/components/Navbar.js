import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  // Function to handle menu button click
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <h1 className="title">DigitalGR</h1>
      <button className="menu-button" onClick={handleMenuClick}>
        <div className="menu-button-line"></div>
        <div className="menu-button-line"></div>
        <div className="menu-button-line"></div>
      </button>
      <div className="menu-items">
        <ul>
          <li><a href="#home" onClick={handleMenuClick}>Home</a></li>
          <li><a href="#about" onClick={handleMenuClick}>About</a></li>
          <li><a href="#contact" onClick={handleMenuClick}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
