import React, { useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import landsImage from "../../img/land.png";
import flatsImage from "../../img/flats.jpg";
import villasImage from "../../img/services.jpg";
import farmhousesImage from "../../img/farmHouse.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const services = [
    { 
      title: "Lands", 
      image: landsImage, 
      description: [
        "Prime residential and commercial plots in strategic locations",
        "Verified ownership and clear titles for all properties",
        "Excellent connectivity to major roads and infrastructure",
        "Potential for high appreciation and investment returns",
        "Flexible payment plans available"
      ],
      reverse: false 
    },
    { 
      title: "Flats", 
      image: flatsImage, 
      description: [
        "Modern apartments with contemporary designs",
        "Amenities including gym, pool, and 24/7 security",
        "Energy-efficient construction with premium finishes",
        "Proximity to schools, hospitals, and shopping centers",
        "Maintenance services included"
      ],
      reverse: true 
    },
    { 
      title: "Villas", 
      image: villasImage, 
      description: [
        "Luxury villas with private gardens and pools",
        "Spacious layouts with premium interior finishes",
        "Gated communities with top-tier security",
        "Smart home technology integration",
        "Custom design options available"
      ],
      reverse: false 
    },
    { 
      title: "Farm Houses", 
      image: farmhousesImage, 
      description: [
        "Serene countryside properties with large plots",
        "Organic farming potential with fertile land",
        "Modern amenities with rustic charm",
        "Perfect for retreats or agri-tourism",
        "Sustainable living options available"
      ],
      reverse: true 
    }
  ];

  return (
    <Container fluid className="services-container px-lg-5 px-md-3 px-2">
      {/* Services Intro */}
      <Row className="mx-0 justify-content-center">
        <Col xs={12} className="text-center">
          <h4 className="services-intro" data-aos="fade-up">
            We provide a diverse range of real estate solutions, including Lands, Flats, Villas, and Farm Houses. Whether you're looking for investment opportunities, a modern apartment, a luxury home, or a peaceful getaway, we have the perfect property for you.
          </h4>
        </Col>
      </Row>

      {/* Services List */}
      {services.map((service, index) => (
        <Row 
          key={index} 
          className={`service-item align-items-center my-5 py-4 ${service.reverse ? 'flex-row-reverse' : ''}`} 
          data-aos="fade-up"
        >
          <Col lg={5} md={12} className="service-image mb-4 mb-lg-0">
            <img 
              src={service.image} 
              alt={service.title} 
              className="img-fluid rounded shadow" 
            />
          </Col>
          <Col lg={7} md={12} className="service-content">
            <h3 className="service-title mb-4">{service.title}</h3>
            <ul className="service-description">
              {service.description.map((point, i) => (
                <li key={i} className="mb-2">{point}</li>
              ))}
            </ul>
            <Button variant="outline-primary" className="mt-3">
              View {service.title} Properties
            </Button>
          </Col>
        </Row>
      ))}

      {/* Contact Section */}
      <Row className="contact-section my-5 py-5" data-aos="fade-up">
        <Col lg={7} md={12} className="contact-form mb-5 mb-lg-0">
          <p className="section-subtitle mb-2">Let's Have a Talk</p>
          <h2 className="section-heading-services mb-4">Have an upcoming project?</h2>
          <form>
            <Row>
              <Col md={6} className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Name" 
                />
              </Col>
              <Col md={6} className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Phone Number" 
                />
              </Col>
            </Row>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Location" 
              />
            </div>
            <div className="mb-4">
              <textarea 
                className="form-control" 
                rows="4" 
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>
            <Button type="submit" className="btn-primary">
              Get Free Consultation
            </Button>
          </form>
        </Col>
        <Col lg={5} md={12} className="contact-info">
          <h2 className="section-heading-services mb-3">Why Choose Us?</h2>
          <ul className="benefits-list">
            <li className="mb-3">15+ years of real estate expertise</li>
            <li className="mb-3">2000+ satisfied clients</li>
            <li className="mb-3">Transparent pricing with no hidden costs</li>
            <li className="mb-3">End-to-end legal and documentation support</li>
            <li className="mb-3">Personalized property recommendations</li>
            <li>Post-purchase support and assistance</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}