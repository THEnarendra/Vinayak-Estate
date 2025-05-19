import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <span className="logo-main">Vinayak</span>
            <span className="logo-sub">Estate</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <div className="main-links">
            <Link to="/" className="nav-link">Home</Link>
            {/* <Link to="/properties" className="nav-link">Properties</Link> */}
            <Link to="/aboutus" className="nav-link">About Us</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact" className="nav-link contact-btn">Contact</Link>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.instagram.com/vinayak_estate/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@vinayakestate" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="tel:+919876543210" className="phone-link" aria-label="Call Us">
              <i className="fas fa-phone-alt"></i>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div 
          className={`hamburger ${menuOpen ? "active" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}