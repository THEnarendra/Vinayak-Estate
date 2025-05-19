import React, { useState } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { FiMapPin, FiChevronRight } from "react-icons/fi";
import { 
  FaBed, 
  FaBath, 
  FaRulerCombined, 
  FaChild, 
  FaCompass,
  FaPhone,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";
import propertyData from "../../staticData/propertyData";
import { Link, useParams } from "react-router-dom";
import "./PropertyDetails.css";

const PropertyDetails = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);
  const { type, location, idSlug } = useParams();

  
  // Extract ID from the URL (format: "123-property-title")
  const propertyId = parseInt(idSlug?.split('-')[0] || '0');
  const propertyType = {
    "lands": "Land",
    "villas": "Villa",
    "farm-houses": "Farm House",
    "flats": "Apartment"
  }[type] || "Property";

  const property = propertyData[`${type?.charAt(0).toUpperCase() + type?.slice(1)}Data`]
    ?.find((property) => property.id === propertyId);

  if (!property) return <div className="text-center py-5">Property not found</div>;

  const displayedImages = showAllImages 
    ? property.images 
    : property.images.slice(0, 6);
  const remainingImages = property.images.length - 6;

  return (
    <>
      <Helmet>
        <title>{property.title} | {propertyType} in {property.location} | Vinayak Estate</title>
        <meta 
          name="description" 
          content={`${property.description.substring(0, 160)}... Located in ${property.location}. ${property.propertyDetails.size}. ${property.propertyDetails.bedrooms} bedrooms.`} 
        />
        <meta property="og:title" content={`${property.title} | Vinayak Estate`} />
        <meta property="og:description" content={property.description.substring(0, 160)} />
        <meta property="og:url" content={`/properties/${type}/${location}/${idSlug}`} />
        {property.images[0] && <meta property="og:image" content={property.images[0]} />}
        <link rel="canonical" href={`/properties/${type}/${location}/${idSlug}`} />
      </Helmet>

      <Container className="property-details-container">
        {/* Breadcrumbs */}
        <div className="breadcrumb mb-3">
          <a href="/">Home</a> &gt; 
          <a>{propertyType}s</a> &gt; 
          {/* <Link to={`properties/${type}/jaipur`}>{propertyType}s</Link> &gt; */}
          {/* <a href={`/${type}s/${location?.toLowerCase()}`}>{location}</a> &gt;  */}
          {/* <span>{property.title}</span> */}
        </div>

        {/* Main Property Header */}
        <Row className="mb-4">
          <Col>
            <h1 className="property-title-propertyDetails" itemProp="name">{property.title}</h1>
            <div className="property-location">
              <FiMapPin className="location-icon" />
              <span itemProp="address">{property.location}</span>
            </div>
            <Badge bg="primary" className="property-type-badge">
              {propertyType}
            </Badge>
          </Col>
        </Row>

        {/* Image Gallery */}
        <Row className="gallery-section">
          <Col lg={8}>
            <div className="main-image-container">
              <img 
                src={property.images[activeImage]} 
                alt={`${property.title} - Main view`}
                className="main-image"
                itemProp="image"
              />
            </div>
            
            <div className="thumbnail-container">
              {displayedImages.map((img, index) => (
                <div 
                  key={index}
                  className={`thumbnail ${index === activeImage ? 'active' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={img} alt={`${property.title} - Thumbnail ${index + 1}`} />
                </div>
              ))}
              {!showAllImages && remainingImages > 0 && (
                <div 
                  className="thumbnail view-more"
                  onClick={() => setShowAllImages(true)}
                >
                  <div className="view-more-count">+{remainingImages}</div>
                </div>
              )}
            </div>
          </Col>

          {/* Contact Section */}
          <Col lg={4}>
            <div className="contact-card">
              <h3 className="contact-title">Contact Agent</h3>
              <div className="agent-info">
                <div className="agent-name">Er. Rakesh Kumawat</div>
                <div className="agent-phone">+91 95XXXXXXXX</div>
              </div>
              
              <div className="price-section" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                <div className="price-label">Ask Price</div>
                <div className="price" itemProp="price">₹{property.price}</div>
              </div>
              
              <div className="action-buttons">
                <Button variant="primary" className="w-100 mb-2">
                  <FaPhone className="me-2" /> Call Now
                </Button>
                <Button variant="outline-success" className="w-100 mb-2">
                  <FaWhatsapp className="me-2" /> WhatsApp
                </Button>
                <Button variant="outline-primary" className="w-100">
                  <FaEnvelope className="me-2" /> Email
                </Button>
              </div>
              
              <div className="quick-details">
                <div className="detail-item">
                  <FaRulerCombined />
                  <span>{property.propertyDetails.size}</span>
                </div>
                {property.propertyDetails.bedrooms && (
                  <div className="detail-item">
                    <FaBed />
                    <span>{property.propertyDetails.bedrooms} Beds</span>
                  </div>
                )}
                {property.propertyDetails.bathrooms && (
                  <div className="detail-item">
                    <FaBath />
                    <span>{property.propertyDetails.bathrooms} Baths</span>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>

        {/* Property Details */}
        <Row className="details-section">
          <Col lg={8}>
            <div className="section-block">
              <h2 className="section-title">Description</h2>
              <p className="property-description" itemProp="description">
                {property.description}
              </p>
            </div>

            <div className="section-block">
              <h2 className="section-title">Property Details</h2>
              <Row>
                <Col md={6}>
                  <ul className="details-list">
                    {property.propertyDetails.bedrooms && (
                      <li>
                        <FaBed className="detail-icon" />
                        <span>{property.propertyDetails.bedrooms} Bedrooms</span>
                      </li>
                    )}
                    {property.propertyDetails.bathrooms && (
                      <li>
                        <FaBath className="detail-icon" />
                        <span>{property.propertyDetails.bathrooms} Bathrooms</span>
                      </li>
                    )}
                    {property.propertyDetails.kidsRoom && (
                      <li>
                        <FaChild className="detail-icon" />
                        <span>{property.propertyDetails.kidsRoom} Kids Room</span>
                      </li>
                    )}
                  </ul>
                </Col>
                <Col md={6}>
                  <ul className="details-list">
                    {property.propertyDetails.facing && (
                      <li>
                        <FaCompass className="detail-icon" />
                        <span>{property.propertyDetails.facing} Facing</span>
                      </li>
                    )}
                    {property.propertyDetails.dimensions && (
                      <li>
                        <FaRulerCombined className="detail-icon" />
                        <span>{property.propertyDetails.dimensions}</span>
                      </li>
                    )}
                  </ul>
                </Col>
              </Row>
            </div>

            {/* Features Section */}
            {property.propertyDetails.features && (
              <div className="section-block">
                <h2 className="section-title">Features</h2>
                <Row>
                  {Object.entries(property.propertyDetails.features).map(([key, value]) => {
                    if (Array.isArray(value) && value.length > 0) {
                      return (
                        <Col md={6} key={key}>
                          <h3 className="feature-subtitle">
                            {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                          </h3>
                          <ul className="features-list">
                            {value.map((item, index) => (
                              <li key={index}>
                                <FiChevronRight className="feature-icon" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </Col>
                      );
                    } else if (value && typeof value === 'string') {
                      return (
                        <Col md={6} key={key}>
                          <div className="feature-item">
                            <FiChevronRight className="feature-icon" />
                            <span>{value}</span>
                          </div>
                        </Col>
                      );
                    }
                    return null;
                  })}
                </Row>
              </div>
            )}

            {/* Nearby Amenities */}
            {property.propertyDetails.nearby && (
              <div className="section-block">
                <h2 className="section-title">Nearby Amenities</h2>
                <div className="amenities-grid">
                  {property.propertyDetails.nearby.map((amenity, index) => (
                    <div key={index} className="amenity-item">
                      <FiChevronRight className="amenity-icon" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Container className="footer-container-unit">
        <h2>Designed by Vinayak Dream Design</h2>
        <h3>- a unit of Vinayak Estate</h3>
      </Container>
    </>
  );
};

export default PropertyDetails;