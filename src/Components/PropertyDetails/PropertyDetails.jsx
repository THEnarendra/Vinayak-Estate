import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./PropertyDetails.css";
import images from '../../img/Interior Swiper/interiorImg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRulerCombined,
  faBed,
  faBath,
  faChild,
  faHome,
  faCompass,
  faCouch,
  faPhoneAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import propertyData from "../../staticData/propertyData"; // Replace with your data source

export default function PropertyDetails() {
  const { title, location, contact, propertyDetails, price, images } = propertyData;
  const property = {
    title: "3 BHK Builder Floor For Sale in Jagatpura, Jaipur",
    price: "₹85 Lac",
    emi: "₹38k",
    image: images[0].url, // Replace with the actual image
    additionalImages: images,
    bedrooms: "3 Beds",
    bathrooms: "2 Baths",
    balconies: "2 Balconies",
    furnished: "Semi-Furnished",
    carpetArea: "1550 sqft",
    floor: "Ground (Out of 3 Floors)",
    transactionType: "Resale",
    status: "Ready to Move",
    facing: "East",
    ownership: "Freehold",
    ageOfConstruction: "New Construction",
    address:
      "Ground Floor B 36 37 Vidhya Nagar Jagatpura Jaipur, Jagatpura, Jaipur, Rajasthan",
    landmarks: "Opposite Jagatpura Railway Flyover",
    furnishing: "Semi-Furnished",
    flooring: "Vitrified, Marble",
    loanOffered: "₹38,336",
  };

  return (
    <Container className="propertyDetails-page">
      <Row className="propertyDetails-breadcrumb-row">
        <Col>
          <p className="propertyDetails-breadcrumb">
            Home Property in Jaipur Builder Floor for Sale in Jagatpura 3 BHK
            1860 Sqft
          </p>
        </Col>
      </Row>

      {/* Property Header Section */}
      <Row className="propertyDetails-header">
        <Col md={8}>
          <h1 className="propertyDetails-title">{property.title}</h1>
          <p className="propertyDetails-price">
            {property.price}{" "}
            <span className="propertyDetails-emi">EMI - {property.emi}</span>
          </p>
        </Col>
        <Col md={4} className="text-md-end propertyDetails-contact-owner-box">
          <Button className="propertyDetails-contact-btn">Contact Owner</Button>
          <Button className="propertyDetails-phone-btn">Get Phone No.</Button>
        </Col>
      </Row>

      {/* Image Grid Section */}
      <Row className="propertyDetails-main-details">
        <Col md={8} className="propertyDetails-image-grid">
          {/* Large Image */}
          <div className="propertyDetails-large-image">
            <img
              src={property.image}
              alt="Property"
              className="propertyDetails-image"
            />
          </div>

          {/* Small Images */}
          <div className="propertyDetails-small-images">
            {property.additionalImages.map((img, index) => (
              <div key={index} className="propertyDetails-small-image">
                <img src={img.url} alt={`Small ${index + 1}`} />
              </div>
            ))}
          </div>
        </Col>

        {/* Contact Box */}
        <Col md={4}>
          <div className="propertyDetails-contact-box">
            <h5>Contact Owner</h5>
            <p>Rahul - 91-95XXXXXXXX</p>
            <Button variant="danger" className="propertyDetails-get-phone-btn">
              Get Phone No.
            </Button>
          </div>
        </Col>
      </Row>

      {/* More Details Section */}
      {/* <Row className="propertyDetails-more-details">
        <Col>
          <h3>More Details</h3>
          <p>
            <strong>Price Breakup:</strong> {property.price}
          </p>
          <p>
            <strong>Address:</strong> {property.address}
          </p>
          <p>
            <strong>Landmarks:</strong> {property.landmarks}
          </p>
          <p>
            <strong>Furnishing:</strong> {property.furnishing}
          </p>
          <p>
            <strong>Flooring:</strong> {property.flooring}
          </p>
          <p>
            <strong>Loan Offered:</strong> Estimated EMI: {property.loanOffered}
          </p>
        </Col>
      </Row> */}





<Row>
        <Col>
          <h1>{title}</h1>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {location.address}, {location.city}
          </p>
          {/* <p>
            Contact: <FontAwesomeIcon icon={faPhoneAlt} /> {contact.phone}
          </p> */}
        </Col>
      </Row>

      {/* Property Details */}
      <Row className="mt-4">
        <Col>
          <h3>Property Details</h3>
        </Col>
      </Row>
      <Row className="details-grid">
        <Col xs={6} sm={4} className="detail-item">
          <FontAwesomeIcon icon={faRulerCombined} />
          <span>Size: {propertyDetails.size}</span>
        </Col>
        <Col xs={6} sm={4} className="detail-item">
          <FontAwesomeIcon icon={faCompass} />
          <span>Facing: {propertyDetails.facing}</span>
        </Col>
        <Col xs={6} sm={4} className="detail-item">
          <FontAwesomeIcon icon={faBed} />
          <span>Bedrooms: {propertyDetails.bedrooms}</span>
        </Col>
        <Col xs={6} sm={4} className="detail-item">
          <FontAwesomeIcon icon={faChild} />
          <span>Kids Room: {propertyDetails.kidsRoom}</span>
        </Col>
        <Col xs={6} sm={4} className="detail-item">
          <FontAwesomeIcon icon={faBath} />
          <span>Bathrooms: {propertyDetails.bathrooms}</span>
        </Col>
        <Col xs={6} sm={4} className="detail-item">
          <FontAwesomeIcon icon={faHome} />
          <span>Drawing Room: {propertyDetails.drawingRoom ? "Yes" : "No"}</span>
        </Col>
        <Col xs={6} sm={4} className="detail-item">
          <FontAwesomeIcon icon={faCouch} />
          <span>Furnished: {propertyDetails.features.furnished ? "Yes" : "No"}</span>
        </Col>
        <Col xs={12} className="mt-3">
          <p className="price">
            <strong>Price:</strong> {price}
          </p>
        </Col>
      </Row>

      {/* Images */}
      <Row className="mt-4">
        <Col>
          <h3>Images</h3>
        </Col>
      </Row>
      <Row>
        {images.map((image, index) => (
          <Col xs={12} sm={6} md={4} className="image-col mb-3" key={index}>
            <img src={image} alt={`Property Image ${index + 1}`} className="img-fluid" />
          </Col>
        ))}
      </Row>

      {/* Download Brochure */}
      <Row className="mt-4 text-center">
        <Col>
          <a href="/path-to-brochure.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Download Brochure
          </a>
        </Col>
      </Row>
    </Container>
  );
}
