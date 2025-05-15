import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col, Button, Container } from "react-bootstrap";
import "./BuilderSection.css";
import PropertyPopup from "../Popup/PropertyPopup";
import propertyData from "../../staticData/propertyData";

const BuilderSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedBuilder, setSelectedBuilder] = useState(null);

  const spotlightProperties = propertyData.VillasData.filter((villa) =>
    villa.featureType.includes("Spotlight")
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    adaptiveHeight: true
  };

  return (
    <Container fluid className="builder-section px-lg-2 px-md-3 px-2">
      <div className="mb-4">
        <h2 className="section-heading-builder-slider">
          Projects in <span>Spotlight</span>
        </h2>
        <p className="section-subtitle-builder">Premium properties handpicked for you</p>
      </div>

      <Slider {...settings} className="spotlight-slider">
        {spotlightProperties.map((property) => (
          <div key={property.id} className="px-2">
            <div className="property-card">
              <Row className="g-0 align-items-center px-4">
                <Col lg={6} className="property-image-col">
                  <div className="image-container">
                    <img 
                      src={property.images[0]} 
                      alt={property.title} 
                      className="property-image"
                    />
                    {property.badge && (
                      <div className="property-badge">
                        {property.badge}
                      </div>
                    )}
                  </div>
                </Col>
                <Col lg={6} className="property-details">
                  <div className="p-2">
                    <h3 className="property-title">{property.title}</h3>
                    {/* <div className="property-rating mb-3">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span className="rating-text">4.5 (120 Reviews)</span>
                    </div> */}
                    <p className="property-description">
                      {property.description.length > 150 
                        ? `${property.description.substring(0, 150)}...` 
                        : property.description}
                    </p>
                    <div className="property-highlights">
                      <div className="highlight-item text-center">
                        {/* <i className="fas fa-map-marker-alt"></i> */}
                        <span>{property.location}</span>
                      </div>
                      {property.area && (
                        <div className="highlight-item">
                          <i className="fas fa-ruler-combined"></i>
                          <span>{property.area} sq.ft</span>
                        </div>
                      )}
                      {property.bedrooms && (
                        <div className="highlight-item">
                          <i className="fas fa-bed"></i>
                          <span>{property.bedrooms} Beds</span>
                        </div>
                      )}
                    </div>
                    <div className="price-section">
                      <div className="price-container">
                        <span className="price-label">Starting Price</span>
                        <span className="price-value">{property.askprice}</span>
                      </div>
                      <Button 
                        variant="primary" 
                        className="enquiry-btn"
                        onClick={() => {
                          setSelectedBuilder(property);
                          setIsPopupOpen(true);
                        }}
                      >
                        <i className="fas fa-phone-alt me-2"></i> Enquire Now
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        ))}
      </Slider>

      {isPopupOpen && selectedBuilder && (
        <PropertyPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          {...selectedBuilder}
        />
      )}
    </Container>
  );
};

export default BuilderSection;