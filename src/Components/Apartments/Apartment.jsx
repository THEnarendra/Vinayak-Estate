import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import './Apartment.css';
import { useNavigate } from 'react-router-dom';

const Apartment = ({ image, title, price, bathrooms, bedrooms }) => {
  const navigate = useNavigate();

  return (
    <Card className="apartment-card">
      <Row className="g-0">
        {/* Left Section - Image */}
        <Col md={4}>
          <Card.Img src={image} alt={title} className="apartment-image" />
        </Col>

        {/* Right Section - Content */}
        <Col md={8}>
          <Card.Body>
            {/* Title */}
            <h4 className="apartment-title">{title}</h4>

            {/* Price */}
            <p className="apartment-price">{price}</p>

            {/* Details: Bathrooms and Bedrooms */}
            <div className="apartment-detail">
              <span className="detail-item">
                <i className="fa fa-shower" aria-hidden="true"></i>
                {bathrooms} <span className="detail-label">BA</span>
              </span>
              <span className="detail-item">
                <i className="fa fa-bed" aria-hidden="true"></i>
                {bedrooms} <span className="detail-label">BD</span>
              </span>
            </div>

            {/* Buttons */}
            <div className="button-group">
              <Button variant="primary" className="details-btn" onClick={() => navigate("/propertydetails")}>
                More Details
              </Button>
              
              <Button variant="outline-secondary" className="contact-btn">
                Contact
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Apartment;
