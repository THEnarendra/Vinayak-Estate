import React from "react";
import CountUp from "react-countup";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./About.css";
import floorplan from '../../img/floorplan.png';
import interiorImg from "../../img/PropertyImages/v1.11.jpg";
import elevation from "../../img/PropertyImages/v2.1.jpg";

const About = () => {
  return (
    <Container fluid className="about-page px-lg-5 px-md-3 px-2">
      {/* About Company Section */}
      <Row className="about-section align-items-center my-5 py-4">
        <Col lg={6} md={12} className="company-info pe-lg-5">
          <h2 className="section-heading-about mb-4">
            About <span>Vinayak Estate</span>
          </h2>
          <p className="company-description">
            Established in 2016, Vinayak Estate has been transforming Rajasthan's real estate landscape with innovative property solutions. Our team combines local expertise with modern approaches to deliver exceptional results.
          </p>
          <p className="company-description">
            From residential complexes to commercial spaces, we handle every aspect of property development - planning, construction, and interior design - ensuring each project reflects our commitment to quality and customer satisfaction.
          </p>
        </Col>

        <Col lg={6} md={12} className="stats-section mb-0 mt-0 mt-lg-0">
          <Row className="g-3">
            <Col md={6} sm={6} xs={6}>
              <div className="stat-card">
                <CountUp start={0} end={784} duration={2.5} className="stat-number" />
                <p className="stat-label">Apartments</p>
              </div>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <div className="stat-card">
                <CountUp start={0} end={3854} duration={2.5} className="stat-number" />
                <p className="stat-label">Clients</p>
              </div>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <div className="stat-card">
                <CountUp start={0} end={24} duration={2.5} className="stat-number" />
                <p className="stat-label">Employees</p>
              </div>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <div className="stat-card">
                <CountUp start={0} end={14} duration={2.5} className="stat-number" />
                <p className="stat-label">Awards</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Vinayak Dream Design Section */}
      <Row className="design-section text-center my-5 py-4">
        <Col xs={12} className="mb-4">
          <h2 className="section-heading-about mb-3">
            Our <span>Enterprises</span>
          </h2>
          <p className="section-subtitle-about mb-0">
            A proud unit of <strong>Vinayak Estate</strong>, offering premium architectural and interior design solutions
          </p>
        </Col>

        <Row className="services-row g-4">
          <Col lg={4} md={6} sm={12}>
            <Card className="service-card h-100">
              <Card.Img variant="top" src={interiorImg} alt="Interior Design Services" />
              <Card.Body>
                <Card.Title className="service-title-about">Interior Design</Card.Title>
                <Card.Text className="service-description">
                  Custom interior solutions blending aesthetics with functionality, from concept to completion.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="service-card h-100">
              <Card.Img variant="top" src={floorplan} alt="Floor Plan Services" />
              <Card.Body>
                <Card.Title className="service-title-about">Space Planning</Card.Title>
                <Card.Text className="service-description">
                  Optimized floor plans that maximize space utilization and enhance living experiences.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="service-card h-100">
              <Card.Img variant="top" src={elevation} alt="Building Elevation Services" />
              <Card.Body>
                <Card.Title className="service-title-about">Building Elevation</Card.Title>
                <Card.Text className="service-description">
                  Striking exterior designs that create lasting impressions and enhance property value.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default About;