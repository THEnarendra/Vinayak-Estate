import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PropertyDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRulerCombined,
  faBed,
  faBath,
  faChild,
  faHome,
  faCompass,
  faCouch,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import propertyData from "../../staticData/propertyData";
import { useParams } from "react-router-dom";

export default function PropertyDetails() {
  const [showAll, setShowAll] = useState(false);
  const { id, route } = useParams();
  const apartments =
    route === "lands"
      ? propertyData.LandData
      : route === "villas"
      ? propertyData.VillasData
      : route === "farm-houses"
      ? propertyData.FarmHouseData
      : propertyData.FlatsData;

  const property = apartments.find((property) => property.id === parseInt(id));

  const handleShowAll = () => {
    setShowAll(true);
  };

  const imagesToShow = showAll
    ? property?.images
    : property?.images.slice(0, 6);
  const remainingCount = property?.images.length - 6;

  console.log("Property Details:", property);
  return (
    <>
    <Container className="propertyDetails-page">
      <Row>
        <Col md={8}>
          <Row>
            {imagesToShow.map((img, index) => (
              <Col key={index} md={4}>
                {index === 5 && !showAll && remainingCount > 0 ? (
                  <div
                    className="propertyImages-overlay"
                    onClick={handleShowAll}
                  >
                    <img
                      className="propertyImages"
                      src={img}
                      alt={`Image ${index + 1}`}
                    />
                    <div className="overlay-text">+{remainingCount}</div>
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
        <Col md={4} className="get-contact">
          <div className="sticky-contact">
            <h5>Contact Dealer</h5>
            <p>
              Er. Rakesh Kumawat <br />- 91-95XXXXXXXX
            </p>
          </div>
        </Col>
      </Row>
      <Row className="propertyDetails-info">
        <Col>
          <h4>{property?.title}</h4>
          <h5>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {property?.location}
          </h5>
          <p>
            <FontAwesomeIcon icon={faRulerCombined} />{" "}
            {property?.propertyDetails.dimensions},{" "}
            {property?.propertyDetails.size}
          </p>
          <hr />
          <Row>
            <Col md={3}>
              <h5>Property Details</h5>
              <ul className="propertyDetails-list">
                <li>
                  <FontAwesomeIcon icon={faBed} />{" "}
                  {property?.propertyDetails.bedrooms} Bedrooms
                </li>
                <li>
                  <FontAwesomeIcon icon={faBath} />{" "}
                  {property?.propertyDetails.bathrooms} Bathrooms
                </li>
                <li>
                  <FontAwesomeIcon icon={faChild} />{" "}
                  {property?.propertyDetails.kidsRoom} Kids Room
                </li>
                <li>
                  <FontAwesomeIcon icon={faHome} />{" "}
                  {property?.propertyDetails.studyRoom} Study Room
                </li>
                <li>
                  <FontAwesomeIcon icon={faCompass} />{" "}
                  {property?.propertyDetails.facing} Facing
                </li>
                <li>
                  <FontAwesomeIcon icon={faCouch} /> Drawing Room
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Features</h5>
              <ul className="propertyDetails-list">
                <li>{property?.propertyDetails.features.interior}</li>
                <li>{property?.propertyDetails.features.furnished}</li>
                <li>{property?.propertyDetails.features.approvals}</li>
                <li>{property?.propertyDetails.features.separatePatta}</li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Furniture</h5>
              <p>{property?.propertyDetails.features.furniture.join(", ")}</p>
            </Col>
            <Col md={3}>
              <h5>Kitchen</h5>
              <p>{property?.propertyDetails.features.kitchen.join(", ")}</p>
            </Col>
            <hr/>
            <Col md={3}>
              <h5>Security</h5>
              <p>{property?.propertyDetails.features.security.join(", ")}</p>
            </Col>
            <Col md={3}>
              <h5>Nearby</h5>
              <p>{property?.propertyDetails.nearby.join(", ")}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <Container className="footer-container-unit">
  <h2>Designed by Vinayak Dream Design </h2>
  <h3>- a unit of Vinayak Estate</h3>
</Container>
    </>
  );
}
