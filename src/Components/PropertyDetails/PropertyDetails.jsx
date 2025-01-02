import React, { useState } from "react";
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
import propertyData from "../../staticData/propertyData";
import { useParams } from "react-router-dom";

export default function PropertyDetails() {
  const [showAll, setShowAll] = useState(false);
  const { id, route } = useParams();
  const apartments = route === "Lands" ? propertyData.LandData : route === "Villas" ? propertyData.VillasData : route === "Farm%20Houses" ? propertyData.FarmHouseData : propertyData.FlatsData;
  const property = apartments.find((property) => property.id === parseInt(id));

  const handleShowAll = () => {
    setShowAll(true);
  };

  const imagesToShow = showAll ? property?.images : property?.images.slice(0, 6);
  const remainingCount = property?.images.length - 6;
  
  return (
    <Container className="propertyDetails-page">
      <Row>
        <Col>
        <Row>
      {imagesToShow.map((img, index) => (
        <Col key={index} md={4}>
          {index === 5 && !showAll && remainingCount > 0 ? (
            <div
              style={{
                position: "relative",
                cursor: "pointer",
              }}
              onClick={handleShowAll}
            >
              <img
                className="propertyImages"
                src={img}
                alt={`Image ${index + 1}`}
                style={{ opacity: 0.5 }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                +{remainingCount}
              </div>
            </div>
          ) : (
            <img
              className="propertyImages"
              src={img}
              alt={`Image ${index + 1}`}
            />
          )}
        </Col>
      ))}
    </Row>
        </Col>
        <Col md={4}>
          <h5>{property?.title}</h5>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {property?.location.address}, {property?.location.city}
          </p>

          <Row className="mt-4">
            <Col xs={6} sm={4} lg={6} className="detail-item">
              <FontAwesomeIcon className="me-3" icon={faRulerCombined} />
              <span>Size: {property?.propertyDetails.size}</span>
            </Col>
            <Col xs={6} sm={4} className="detail-item">
              <FontAwesomeIcon className="me-3" icon={faCompass} />
              <span>Facing: {property?.propertyDetails.facing}</span>
            </Col>
            <Col xs={6} sm={4} className="detail-item">
              <FontAwesomeIcon className="me-3" icon={faBed} />
              <span>Bedrooms: {property?.propertyDetails.bedrooms}</span>
            </Col>
            <Col xs={6} sm={4} className="detail-item">
              <FontAwesomeIcon className="me-3" icon={faChild} />
              <span>Kids Room: {property?.propertyDetails.kidsRoom}</span>
            </Col>
            <Col xs={6} sm={4} className="detail-item">
              <FontAwesomeIcon className="me-3" icon={faBath} />
              <span>Bathrooms: {property?.propertyDetails.bathrooms}</span>
            </Col>
            <Col xs={6} sm={4} className="detail-item">
              <FontAwesomeIcon className="me-3" icon={faHome} />
              <span>Drawing Room: {property?.propertyDetails.drawingRoom ? "Yes" : "No"}</span>
            </Col>
            <Col xs={12} className="mt-3">
              <p className="price">
              </p>
            </Col>
          </Row>
          <h5>Contact Owner</h5>
          <p>Rahul - 91-95XXXXXXXX</p>
          <Button variant="danger" className="propertyDetails-get-phone-btn">
            Get Phone No.
          </Button>
        </Col>
      </Row>

    </Container>
  );
}
