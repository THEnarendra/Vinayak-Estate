import React from "react";
import CountUp from "react-countup";
import "./About.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import floorplan from '../../img/floorplan.png'
import  interiorImg  from "../../img/PropertyImages/v1.11.jpg";
import elevation from "../../img/PropertyImages/v2.1.jpg";

const About = () => {
  return (
    <>
      <Row className="about" id="about">
        <Col className="company">
          <h2 className="heading">Vinayak Estate</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            vitae nam a! Consequatur ut veniam iste, temporibus eveniet
            repudiandae quia! Animi quo expedita molestiae deleniti soluta in
            saepe beatae a est. Enim inventore itaque ea voluptas quibusdam
            dolore esse dignissimos?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            vitae nam a! Consequatur ut veniam iste, temporibus eveniet
            repudiandae quia! Animi quo expedita molestiae deleniti soluta in
            saepe beatae a est. Enim inventore itaque ea voluptas quibusdam
            dolore esse dignissimos?
          </p>
        </Col>
        <Col className="stats">
          <div className="apartments">
            <p>
              <CountUp start={0} end={784} duration={2.5} />
              <br /> Apartments
            </p>
          </div>
          <div className="clients">
            <p>
              <CountUp start={0} end={3854} duration={2.5} />
              <br /> Clients
            </p>
          </div>
          <div className="employees">
            <p>
              <CountUp start={0} end={24} duration={2.5} />
              <br /> Employees
            </p>
          </div>
          <div className="awards">
            <p>
              <CountUp start={0} end={14} duration={2.5} />
              <br /> Awards
            </p>
          </div>
        </Col>
      </Row>







      <Container fluid className="vinayak-dream-design">
      <Row className="text-center mb-4">
        <Col>
        <h1 className="our-enterprises" style={{ fontSize: "3rem" }}>
          Our <span>Enterprises </span>
        </h1>
          <h2 className="section-title">Vinayak Dream Design</h2>
          <p className="section-subtitle">
            A proud unit of <strong>Vinayak Estate</strong>, offering premium architectural and interior design solutions to make your dream property a reality.
          </p>
        </Col>
      </Row>

      <Row className="services-section">
        <Col md={4} sm={12} className="mb-4">
          <Card className="service-card">
            <Card.Img variant="top" src={interiorImg} alt="Interior Work" />
            <Card.Body>
              <Card.Title>Interior Work</Card.Title>
              <Card.Text>
                Transform your space with modern, luxurious, and functional interiors tailored to your style.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={12} className="mb-4">
          <Card className="service-card">
            <Card.Img variant="top" src={floorplan} alt="Floor Plan" />
            <Card.Body>
              <Card.Title>Floor Plan</Card.Title>
              <Card.Text>
                Design efficient and innovative layouts to make the most of your space.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={12} className="mb-4">
          <Card className="service-card">
            <Card.Img variant="top" src={elevation} alt="Elevation"/>
            <Card.Body>
              <Card.Title>Elevation</Card.Title>
              <Card.Text>
                Create striking elevations to give your property an eye-catching exterior look.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default About;
