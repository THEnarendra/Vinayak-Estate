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
import { useParams } from "react-router-dom";

export default function PropertyDetails() {
  const { id, route } = useParams();
  const apartments = route === "Lands" ? propertyData.LandData : route=== "Villas" ? propertyData.VillasData : route === "Farm%20Houses" ? propertyData.FarmHouseData : propertyData.FlatsData;
  const property = apartments.find((property) => property.id === parseInt(id));
  return (
    <Container className="propertyDetails-page">
      <Row className="propertyDetails-breadcrumb-row">
        <Col>
          <p className="propertyDetails-breadcrumb">
            {property?.location?.address + ", " + property?.location?.city + ", " + property?.location?.state}
          </p>
        </Col>
      </Row>

      {/* <Row className="propertyDetails-header">
        <Col md={4} className="text-md-end propertyDetails-contact-owner-box">
          <Button className="propertyDetails-contact-btn">Contact Owner</Button>
          <Button className="propertyDetails-phone-btn">Get Phone No.</Button>
        </Col>
      </Row> */}
      
      <Row className="propertyDetails-main-details">
        <Col md={8} className="propertyDetails-image-grid">
          <div className="propertyDetails-large-image">
            {/* <img
              src={property.images?.[0]}
              alt="Property"
              className="propertyDetails-image"
            /> */}
          </div>
          <div className="propertyDetails-small-images">
            <Row>
            {property?.images.map((img, index) => (
              <Col key={index} md={4}>
              <div key={index} className="propertyDetails-small-image">
                <img src={img} alt={`Small ${index + 1}`} />
              </div>
              </Col>
            ))}
            </Row>
          </div>
        </Col>

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
      <Row>
        <Col>
          <h1>{property?.title}</h1>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {property?.location.address}, {property?.location.city}
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
          <span>Size: {property?.propertyDetails.size}</span>
        </Col>
        <Col xs={6} sm={4} className="detail-item">
          <FontAwesomeIcon icon={faCompass} />
          <span>Facing: {property?.propertyDetails.facing}</span>
        </Col>
        <Col xs={6} sm={4} className="detail-item">
          <FontAwesomeIcon icon={faBed} />
          <span>Bedrooms: {property?.propertyDetails.bedrooms}</span>
        </Col>
        <Col xs={6} sm={4} className="detail-item">
          <FontAwesomeIcon icon={faChild} />
          <span>Kids Room: {property?.propertyDetails.kidsRoom}</span>
        </Col>
        <Col xs={6} sm={4} className="detail-item">
          <FontAwesomeIcon icon={faBath} />
          <span>Bathrooms: {property?.propertyDetails.bathrooms}</span>
        </Col>
        <Col xs={6} sm={4} className="detail-item">
          <FontAwesomeIcon icon={faHome} />
          <span>Drawing Room: {property?.propertyDetails.drawingRoom ? "Yes" : "No"}</span>
        </Col>
        <Col xs={6} sm={4} className="detail-item">
          <FontAwesomeIcon icon={faCouch} />
          {/* <span>Furnished: {property?.propertyDetails.f? "Yes" : "No"}</span> */}
        </Col>
        <Col xs={12} className="mt-3">
          <p className="price">
            {/* <strong>Price:</strong> {price} */}
          </p>
        </Col>
      </Row>

      {/* Images */}
      <Row className="mt-4">
        <Col>
          <h3>Images</h3>
        </Col>
      </Row>
      {/* <Row>
        {images.map((image, index) => (
          <Col xs={12} sm={6} md={4} className="image-col mb-3" key={index}>
            <img src={image} alt={`Property Image ${index + 1}`} className="img-fluid" />
          </Col>
        ))}
      </Row> */}

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
