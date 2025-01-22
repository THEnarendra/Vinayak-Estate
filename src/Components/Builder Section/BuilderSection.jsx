import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import "./BuilderSection.css";
import PropertyPopup from "../Popup/PropertyPopup";
import { useNavigate } from "react-router-dom";
import propertyData from "../../staticData/propertyData";

const CarouselContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 4px 2px;
`;

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
    <>
      <CarouselContainer>
        <Slider {...settings}>
          {spotlightProperties.map((builder) => (
            <div className="carousel-item" key={builder.id}>
              <div className="gradient-container">
                <div className="content">
                  <h3 className="builder-name">{builder.title}</h3>
                  <p className="property-description">{builder.description}</p>
                  <p className="property-location">{builder.location}</p>
                  {/* <strong className="property-price">{builder.askprice}</strong> */}
                  <div className="display-flex">
                  <strong className="property-price">For Price : </strong>
                  <button
                    className="contact-btn"
                    onClick={() => openPopup(builder)}
                  >
                    Contact Us..
                  </button>
                  </div>
                </div>
                <div className="image-container">
                  <img
                    src={builder.images[0]}
                    alt={builder.title}
                    className="property-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </CarouselContainer>

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
    </>
  );
};

export default BuilderSection;
