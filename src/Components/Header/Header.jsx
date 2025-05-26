import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import { FiHome, FiMapPin, FiStar, FiTrendingUp } from "react-icons/fi";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="real-estate-header">
      <Container className="header-container">
        <Row className="align-items-center">
          <Col lg={6} md={12} className="header-content">
            <div className="header-text">
              <h1>
                Find Your Perfect <span className="highlight">Property</span>
              </h1>
              <div className="typewriter-container">
                <p>
                  Discover luxury{" "}
                  <span className="typing-effect">
                    <Typewriter
                      words={["Villas", "Apartments", "Farm Houses", "Lands"]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={2000}
                    />
                  </span>
                </p>
              </div>
              <p className="header-description">
                Experience premium living with our curated selection of properties 
                designed for your comfort and lifestyle.
              </p>
              <div className="cta-buttons">
                {/* <button 
                  className="primary-btn" 
                  onClick={() => {
                    const element = document.getElementById('featured-projects');
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                >
                  Browse Properties
                </button> */}
                <Link to='/contact'>
                  <button className="secondary-btn">Get Consultation</button>
                </Link>        
              </div>
            </div>
          </Col>  
          <Col lg={6} md={12} className="header-visual">
            <div className="property-stats-container">
              {/* <div className="featured-property-card">
                <div className="property-badge">Featured</div>
                <div className="property-info">
                  <h3>Luxury Waterfront Villa</h3>
                  <div className="property-meta">
                    <span><FaBed /> 4</span>
                    <span><FaBath /> 3</span>
                    <span><FaRulerCombined /> 3,200 sq.ft.</span>
                  </div>
                  <div className="property-location">
                    <FiMapPin /> Villas and Flats in Jaipur
                  </div>
                </div>
              </div> */}
              
              {/* Stats Grid */}
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon">
                    <FiHome />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Properties</div>
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">
                    <FiStar />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Client Satisfaction</div>
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">
                    <FiTrendingUp />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                </div>
              </div>
              
              {/* View All CTA */}
              <div className="view-all-cta">
                {/* <Link to="/properties" className="view-all-link">
                  View All Properties <span className="arrow">→</span>
                </Link> */}
                <div className="view-all-cta">
                   <a href="#featured-projects" className="view-all-link"
                    onClick={(e) => {e.preventDefault();
                    const element = document.getElementById('featured-projects');
                    if (element) {
                      element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                  });}}}>
                View All Properties <span className="arrow">→</span>
                  </a>
              </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;