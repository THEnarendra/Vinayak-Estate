import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">Vinayak E-state</Link>
      </div>

      {/* Desktop Navigation */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <div className="main-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/aboutus" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Our Services</Link>
          <Link to="/blog" className="nav-link">Blogs</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://www.instagram.com/vinayak_estate/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@vinayakestate" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      {/* Mobile Toggle */}
      <div 
        className={`hamburger ${menuOpen ? "active" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}