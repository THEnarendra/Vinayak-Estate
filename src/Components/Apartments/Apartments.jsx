import React from "react";
import { Row, Col, Button, Container, Card, Badge } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { FiMapPin, FiLayers, FiHome, FiArrowRight } from "react-icons/fi";
import { Helmet } from "react-helmet";
import propertyData from "../../staticData/propertyData";
import "./Apartments.css";

const createSlug = (text) => {
  return text?.toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')  // Remove invalid chars
    .replace(/\s+/g, '-')         // Replace spaces with -
    .replace(/-+/g, '-')          // Replace multiple - with single -
    || '';
};

const NoData = ({ category }) => {
  const propertyType = {
    "lands": "Land",
    "villas": "Villa",
    "farm-houses": "Farm House",
    "flats": "Apartment"
  }[category] || "Property";

  return (
    <div className="no-data text-center py-5">
      <FiHome className="no-data-icon" size={48} />
      <h2 className="mt-3">No {propertyType} Listings Available</h2>
      <p className="text-muted mb-4">
        We're currently updating our {propertyType.toLowerCase()} inventory. 
        Please check back soon or contact us for upcoming projects.
      </p>
      <Button variant="primary" size="lg">
        Contact Our Agents
      </Button>
    </div>
  );
};

const Apartments = () => {
  const navigate = useNavigate();
  const { type = 'flats', location = 'jaipur' } = useParams();

  const propertyType = {
    "lands": "Land",
    "villas": "Villa",
    "farm-houses": "Farm House",
    "flats": "Apartment"
  }[type] || "Property";

  // Safely access property data
  const propertyTypeKey = `${type.charAt(0).toUpperCase() + type.slice(1)}Data`;
  const apartments = propertyData[propertyTypeKey] || [];

  const handleNavigate = (property) => {
    const slug = createSlug(property.title);
    navigate(`/properties/${type}/${property.location.toLowerCase()}/${property.id}-${slug}`);
  };

  return (
    <Container fluid className="apartments-page px-lg-5 px-md-3 px-2">
      <Helmet>
        <title>{propertyType}s for Sale in {location.charAt(0).toUpperCase() + location.slice(1)} | Vinayak Estate</title>
        <meta 
          name="description" 
          content={`Browse premium ${propertyType.toLowerCase()} listings in ${location}. Find your dream property with verified details and best prices.`} 
        />
      </Helmet>

      <Row className="mb-5">
        <Col xs={12}>
          <h1 className="page-title-apartments">
            {propertyType}s in <span className="text-primary">{location.charAt(0).toUpperCase() + location.slice(1)}</span>
          </h1>
          <p className="page-subtitle-apartments">
            Showing {apartments.length} {apartments.length === 1 ? 'property' : 'properties'}
          </p>
        </Col>
      </Row>

      {apartments.length === 0 ? (
        <NoData category={type} />
      ) : (
        <Row className="g-4">
          {apartments.map((apartment) => (
            <Col key={apartment.id} xl={6} className="mb-4">
              <Card 
                className="property-card h-100" 
                onClick={() => handleNavigate(apartment)}
                itemScope
                itemType="http://schema.org/Product"
              >
                <Row className="g-0 h-100">
                  <Col md={5} className="property-image-container-apartments">
                    <div 
                      className="property-image-apartments"
                      style={{
                        backgroundImage: `url(${apartment.images?.[0] || ''})`
                      }}
                      itemProp="image"
                    >
                      <Badge bg="primary" className="property-type-badge">
                        {propertyType}
                      </Badge>
                      <div className="image-overlay"></div>
                    </div>
                  </Col>
                  <Col md={7}>
                    <Card.Body className="property-details-apartments">
                      <Card.Title className="property-title-apartments" itemProp="name">
                        {apartment.title}
                      </Card.Title>
                      
                      <div className="property-highlights mb-3">
                        <div className="highlight-item">
                          <FiMapPin className="highlight-icon" />
                          <span itemProp="address">{apartment.location}</span>
                        </div>
                        <div className="highlight-item">
                          <FiLayers className="highlight-icon" />
                          <span itemProp="floorSize">{apartment.propertyDetails.size}</span>
                        </div>
                      </div>
                      
                      <div className="property-description-apartments" itemProp="description">
                        {apartment.description.substring(0, 100)}...
                      </div>
                      
                      <div className="d-flex justify-content-between align-items-center mt-4">
                        <div className="price-tag" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                          <div className="price" itemProp="price">
                            {apartment.price && `₹${apartment.price}`}
                          </div>
                        </div>
                        <Button variant="outline-primary" className="view-details-btn">
                          View Details <FiArrowRight className="ms-2" />
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Apartments;