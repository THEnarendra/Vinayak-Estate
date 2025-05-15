import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      title: "Pay on Credit",
      description: "Pay your rent using Credit Card",
      icon: "💳"
    },
    {
      title: "Housing Premium",
      description: "Instant access to zero brokerage properties",
      icon: "🏆"
    },
    {
      title: "Home Loans",
      description: "Lowest interest rate offers",
      icon: "🏦"
    },
    {
      title: "Housing Protect",
      description: "Protection against cyber frauds",
      icon: "🛡️"
    }
  ];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1, // Show one full card
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: '20%', // Shows 20% of both previous and next cards
  focusOnSelect: true
};

  return (
    <Container className="services-section px-lg-2 px-md-4 px-3">
      <Row className="services-heading">
        <h1>
          Housing <span>Edge</span>
        </h1>
        <p>
          Explore property related services
        </p>
      </Row>
      
      {/* Desktop/Tablet View - unchanged */}
      <Row className="services-cards g-4 d-none d-sm-flex">
        {services.map((service, index) => (
          <Col 
            key={index}
            xs={12} 
            sm={6} 
            lg={3}
            className="d-flex justify-content-center"
          >
            <div className="gradient-container service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-name">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </Col>
        ))}
      </Row>

      {/* Mobile Slider View - minimal changes */}
      <div className="d-block d-sm-none services-slider-container">
        <Slider {...sliderSettings}>
          {services.map((service, index) => (
            <div key={index} className="px-1"> {/* Small horizontal padding */}
              <div className="gradient-container service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-name">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default ServicesSection;