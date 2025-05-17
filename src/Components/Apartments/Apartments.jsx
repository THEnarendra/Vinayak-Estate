import React from "react";
import { Row, Col, Button, Container, Card, Badge } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { FiMapPin, FiLayers, FiHome, FiArrowRight } from "react-icons/fi";
import { Helmet } from "react-helmet";
import propertyData from "../../staticData/propertyData";
import "./Apartments.css";

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
  const { id } = useParams();

  const propertyType = {
    "lands": "Land",
    "villas": "Villa",
    "farm-houses": "Farm House",
    "flats": "Apartment"
  }[id] || "Property";

  const apartments =
    id === "lands"
      ? propertyData.LandData
      : id === "villas"
      ? propertyData.VillasData
      : id === "farm-houses"
      ? propertyData.FarmHouseData
      : propertyData.FlatsData;

  const handleNavigate = (data) => {
    navigate(`/${id}/${data}`);
  };

  return (
    <Container fluid className="apartments-page px-lg-5 px-md-3 px-2">
      <Helmet>
        <title>{propertyType}s for Sale in Jaipur | Vinayak Estate</title>
        <meta 
          name="description" 
          content={`Browse premium ${propertyType.toLowerCase()} listings in Jaipur. Find your dream property with verified details and best prices.`} 
        />
        <meta property="og:title" content={`${propertyType}s in Jaipur | Vinayak Estate`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Row className="mb-5">
        <Col xs={12}>
          <h1 className="page-title">
            {propertyType}s in <span className="text-primary">Jaipur</span>
          </h1>
          <p className="page-subtitle">
            Showing {apartments.length} {apartments.length === 1 ? 'property' : 'properties'}
          </p>
        </Col>
      </Row>

      {apartments.length === 0 ? (
        <NoData category={id} />
      ) : (
        <Row className="g-4">
          {apartments.map((apartment) => (
            <Col key={apartment.id} xl={6} className="mb-4">
              <Card 
                className="property-card h-100" 
                onClick={() => handleNavigate(apartment.id)}
                itemScope
                itemType="http://schema.org/Product"
              >
                <Row className="g-0 h-100">
                  <Col md={5} className="property-image-container">
                    <div 
                      className="property-image"
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
                    <Card.Body className="property-details">
                      <Card.Title className="property-title" itemProp="name">
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
                      
                      <div className="property-description" itemProp="description">
                        {apartment.description.substring(0, 120)}...
                      </div>
                      
                      <div className="d-flex justify-content-between align-items-center mt-4">
                        <div className="price-tag" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                          {/* <span className="text-muted">Starting from</span> */}
                          {/* <div className="price" itemProp="price">
                            ₹{apartment.price}
                          </div> */}
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