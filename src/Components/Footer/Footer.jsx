import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        {/* Contact Info Section - Now in a single column for mobile */}
        <Row className="footer-cta py-3">
          <Col xs={12} className="mb-3">
            <div className="single-cta d-flex align-items-start">
              <i className="fas fa-map-marker-alt mt-1 me-2" style={{ color: "#4e00b7", fontSize: "1.2rem" }}></i>
              <div className="cta-text">
                <h4>Find us</h4>
                <span>Govindam Tower, Govindpura, Jaipur, Rajasthan</span>
              </div>
            </div>
          </Col>
          
          <Col xs={12} className="mb-3">
            <div className="single-cta d-flex align-items-start">
              <i className="fas fa-phone mt-1 me-2" style={{ color: "#4e00b7", fontSize: "1.2rem" }}></i>
              <div className="cta-text">
                <h4>Call us</h4>
                <span>+91 9660225994</span>
              </div>
            </div>
          </Col>
          
          <Col xs={12}>
            <div className="single-cta d-flex align-items-start">
              <i className="far fa-envelope-open mt-1 me-2" style={{ color: "#4e00b7", fontSize: "1.2rem" }}></i>
              <div className="cta-text">
                <h4>Mail us</h4>
                <span>vinayakestate@gmail.com</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Main Footer Content - Stacked on mobile */}
        <Row className="footer-content py-4">
          <Col md={4} className="mb-4">
            <div className="footer-widget">
              <div className="footer-logo mb-3">
                <h2 className="text-light" style={{ fontSize: "1.5rem" }}>Vinayak E-state</h2>
              </div>
              <div className="footer-text mb-3">
                <p style={{ fontSize: "0.85rem" }}>We Vinayak Estate are a well established company since 2016 and we do from Planning to Development of your Dream Property.</p>
              </div>
              <div className="footer-social-icon">
                <span className="d-block mb-2" style={{ fontSize: "0.9rem" }}>Follow us</span>
                <div className="d-flex gap-2">
                  <a href="#"><i className="fab fa-facebook-f facebook-bg" style={{ fontSize: "0.9rem", width: "30px", height: "30px", lineHeight: "30px" }}></i></a>
                  <a href="#"><i className="fab fa-twitter twitter-bg" style={{ fontSize: "0.9rem", width: "30px", height: "30px", lineHeight: "30px" }}></i></a>
                  <a href="#"><i className="fab fa-google-plus-g google-bg" style={{ fontSize: "0.9rem", width: "30px", height: "30px", lineHeight: "30px" }}></i></a>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="footer-widget">
              <div className="footer-widget-heading mb-3">
                <h3 style={{ fontSize: "1.1rem" }}>Useful Links</h3>
              </div>
              <Row>
                <Col xs={6}>
                  <ul className="list-unstyled">
                    <li className="mb-1"><a href="/" style={{ fontSize: "0.85rem" }}>Home</a></li>
                    <li className="mb-1"><a href="/aboutus" style={{ fontSize: "0.85rem" }}>About</a></li>
                    <li className="mb-1"><a href="/services" style={{ fontSize: "0.85rem" }}>Services</a></li>
                  </ul>
                </Col>
                <Col xs={6}>
                  <ul className="list-unstyled">
                    <li className="mb-1"><a href="/properties" style={{ fontSize: "0.85rem" }}>Properties</a></li>
                    <li className="mb-1"><a href="/blog" style={{ fontSize: "0.85rem" }}>Blog</a></li>
                    <li className="mb-1"><a href="/contact" style={{ fontSize: "0.85rem" }}>Contact</a></li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={4}>
            <div className="footer-widget">
              <div className="footer-widget-heading mb-3">
                <h3 style={{ fontSize: "1.1rem" }}>Subscribe</h3>
              </div>
              <div className="footer-text mb-3">
                <p style={{ fontSize: "0.85rem" }}>Don't miss to subscribe to our new feeds.</p>
              </div>
              <div className="subscribe-form">
                <form className="d-flex">
                  <input 
                    type="email" 
                    className="form-control form-control-sm" 
                    placeholder="Email Address" 
                    style={{ fontSize: "0.85rem" }}
                  />
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-sm"
                    style={{ padding: "0 0.75rem" }}
                  >
                    <i className="fab fa-telegram-plane" style={{ fontSize: "0.9rem" }}></i>
                  </button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Copyright Section */}
      <div className="copyright-area py-2">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="text-center text-md-start mb-2 mb-md-0">
              <div className="copyright-text">
                <p className="m-0" style={{ fontSize: "0.75rem" }}>Copyright &copy; 2025, All Rights Reserved <a href="/">Vinayak E-state</a></p>
              </div>
            </Col>
            <Col xs={12} md={6} className="text-center text-md-end">
              <div className="footer-menu">
                <ul className="list-inline m-0">
                  <li className="list-inline-item"><a href="#" style={{ fontSize: "0.75rem" }}>Terms</a></li>
                  <li className="list-inline-item"><a href="#" style={{ fontSize: "0.75rem" }}>Privacy</a></li>
                  <li className="list-inline-item"><a href="#" style={{ fontSize: "0.75rem" }}>Policy</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;