import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Home Buyer",
      text: "Vinayak Estate helped me find my dream home in record time. Their team was professional and transparent throughout.",
      rating: 5
    },
    {
      name: "Rahul Sharma",
      role: "Home Buyer",
      text: "Vinayak Estate helped me find my dream home in record time. Their team was professional and transparent throughout.",
      rating: 5
    },
    {
      name: "Rahul Sharma",
      role: "Home Buyer",
      text: "Vinayak Estate helped me find my dream home in record time. Their team was professional and transparent throughout.",
      rating: 5
    },
    // Add 2 more testimonials
  ];

  return (
    <Container fluid className="testimonials-section homeSection px-lg-5 px-md-4 px-3">
      <div className="section-intro text-center mb-5">
        <h2 className="section-heading mb-0">Client Testimonials</h2>
        <p className="section-text mb-0">What our customers say about us</p>
      </div>
      
      <Row className="testimonials-grid g-4 justify-content-center">
        {testimonials.map((testimonial, index) => (
          <Col key={index} lg={4} md={6} className="d-flex">
            <div className="testimonial-card w-100">
              <div className="rating">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="client-info">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;