import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import "./BuilderSection.css";
import PropertyPopup from "../Popup/PropertyPopup";
import { useNavigate } from "react-router-dom";
import propertyData from "../../staticData/propertyData";

const BuilderSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedBuilder, setSelectedBuilder] = useState(null);
  const navigate = useNavigate();

  const openPopup = (builder) => {
    setSelectedBuilder(builder);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedBuilder(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
  };

  const spotlightProperties = propertyData.VillasData.filter((villa) =>
    villa.featureType.includes("Spotlight")
  );

  return (
    <Container fluid>
      {/* <Row>
        <Col className="text-center">
          <h2 className="section-title">Spotlight Properties</h2>
        </Col>
      </Row> */}
      <Slider {...settings}>
        {spotlightProperties.map((builder) => (
          <div key={builder.id} className="carousel-item">
            <Container className="gradient-container">
              <Row className="align-items-center">
                {/* Text Content */}
                <Col md={6} xs={12} className="text-content">
                  <h3 className="builder-name">{builder.title}</h3>
                  <p className="property-description">{builder.description}</p>
                  <p className="property-location">{builder.location}</p>
                  <div className="display-flex">
                    <strong className="property-price">For Price: </strong>
                    <Button
                      variant="primary"
                      className="contact-btn"
                      onClick={() => openPopup(builder)}
                    >
                      Contact Us
                    </Button>
                  </div>
                </Col>
                {/* Image */}
                <Col md={6} xs={12} className="image-container">
                  <img
                    src={builder.images[0]}
                    alt={builder.title}
                    className="property-image"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        ))}
      </Slider>

      {/* Popup */}
      {isPopupOpen && selectedBuilder && (
        <PropertyPopup
          isOpen={isPopupOpen}
          onClose={closePopup}
          image={selectedBuilder.images[0]}
          name={selectedBuilder.title}
          price={selectedBuilder.askprice}
          id={selectedBuilder.id}
          propertyType={selectedBuilder.propertyType}
          contactInfo={{
            phone: selectedBuilder.contactInfo.phone,
            email: selectedBuilder.contactInfo.email,
          }}
        />
      )}
    </Container>
  );
};

export default BuilderSection;
