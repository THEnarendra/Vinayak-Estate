import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./StatsSection.css";

const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "250+", label: "Properties Sold" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Awards Won" }
  ];

  return (
    <Container fluid className="stats-section px-lg-5 px-md-3 px-2">
      <Row className="justify-content-center text-center mb-4 mb-lg-5">
        <Col xs={12}>
          <h2 className="stats-heading">
            Milestones <span>Achieved</span>
          </h2>
          <p className="stats-subheading">
            Our journey in numbers
          </p>
        </Col>
      </Row>
      
      <Row className="stats-section-row g-4">
        {stats.map((stat, index) => (
          <Col lg={3} md={6} xs={12} key={index}>
            <div className="stat-card">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StatsSection;