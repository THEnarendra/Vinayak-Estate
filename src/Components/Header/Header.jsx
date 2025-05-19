import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="real-estate-header">
      <Container>
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
                <button className="primary-btn" onClick={() => {
                        const element = document.getElementById('featured-projects');
                        if (element) {
                        element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });} }}
                >Browse Listings</button>
                <Link to='/contact'><button className="secondary-btn">Get Consultation</button></Link>        
              </div>
            </div>
          </Col>  
          <Col lg={6} md={12} className="header-visual">
            <div className="property-card-grid">
              <div className="card-item card-main"></div>
              <div className="card-item card-secondary"></div>
              <div className="card-item card-tertiary"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;