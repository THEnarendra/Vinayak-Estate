import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Testimonials.css';

const Testimonials = () => {
const testimonials = [
  {
    name: "Priya Singh",
    role: "Home Buyer",
    location: "Jaipur",
    text: "As a first-time home buyer in Jaipur, Vinayak Estate made the process seamless. They understood exactly what I was looking for and found me a beautiful apartment in the perfect location. Their local market knowledge is unmatched!",
    rating: 5
  },
  {
    name: "Arjun Mehra",
    role: "Investor",
    location: "Delhi",
    text: "I've worked with many real estate agencies in Delhi, but Vinayak Estate stands out. They helped me identify and secure two high-potential investment properties in South Delhi that have already appreciated 25% in value.",
    rating: 5
  },
  {
    name: "Neha Kapoor",
    role: "NRI Client",
    location: "Delhi",
    text: "Being based overseas, I needed a trustworthy partner to handle my property search in Delhi. Vinayak Estate exceeded expectations - they provided virtual tours, handled all paperwork, and even helped with interior design recommendations.",
    rating: 5
  }
];

  return (
    <Container fluid className="testimonials-section homeSection px-lg-5 px-md-4 px-3">
      <div className="section-intro text-center mb-5">
        <h2 className="section-heading mb-0">Client Testimonials</h2>
        <p className="section-text mb-0 ">What our customers say about us</p>
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