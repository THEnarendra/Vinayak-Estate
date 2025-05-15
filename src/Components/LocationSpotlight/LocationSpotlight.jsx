import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './LocationSpotlight.css';

const LocationSpotlight = () => {
  const locations = [
    {
      name: "Jaipur",
      properties: 120,
      image: "jaipur.jpg"
    },
    // Add 2 more locations
  ];

  return (
    <Container fluid className="location-spotlight homeSection">
      <div className="section-intro">
        <h2 className="section-heading">Prime Locations</h2>
        <p className="section-text">Explore our most popular areas</p>
      </div>
      
      <Row className="locations-grid g-4">
        {locations.map((location, index) => (
          <Col key={index} lg={4} md={6}>
            <div className="location-card">
              <img src={location.image} alt={location.name} />
              <div className="location-overlay">
                <h3>{location.name}</h3>
                <p>{location.properties}+ Properties</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LocationSpotlight;