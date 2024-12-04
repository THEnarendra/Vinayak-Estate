import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./PropertyDetails.css";
import images from '../../img/Interior Swiper/interiorImg'

export default function PropertyDetails() {
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
      <Row className="propertyDetails-more-details">
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
      </Row>
    </Container>
  );
}
