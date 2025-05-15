import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Your message has been sent! We will contact you soon.');
  };

  return (
    <Container fluid className="contact-page px-lg-5 px-md-3 px-2">
      <Row className="mb-5">
        <Col xs={12} className="text-center">
          <h1 className="section-heading mb-0">Contact <span className="text-primary">Vinayak Estate</span></h1>
          <p className="section-subtitle">Get in touch with our team for any inquiries or assistance</p>
        </Col>
      </Row>

      <Row className="g-4">
        {/* Contact Information */}
        <Col lg={4} md={6}>
          <div className="contact-info-card">
            <div className="contact-method">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h3>Our Office</h3>
                <p>Govindam Tower, Govindpura, Jaipur, Rajasthan</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h3>Phone Number</h3>
                <p>+91 9660225994</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email Address</h3>
                <p>vinayakestate@gmail.com</p>
              </div>
            </div>
          </div>
        </Col>

        {/* Contact Form */}
        <Col lg={8} md={6}>
          <div className="contact-form-card">
            <h2 className="form-title">Send us a message</h2>
            <Form onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="What's this about?" required />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="formMessage">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Type your message here..." required />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Button variant="primary" type="submit" className="submit-btn">
                    <FaPaperPlane className="me-2" />
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>

      {/* Google Map Embed */}
      <Row className="mt-5">
        <Col xs={12}>
          <div className="map-container">
            <iframe
              title="Vinayak Estate Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.367315036307!2d75.7884693150456!3d26.92392298312281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6b5b9a5e6a5%3A0x1f50f9a6b5e5e5e5!2sGovindam%20Tower%2C%20Govindpura%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;