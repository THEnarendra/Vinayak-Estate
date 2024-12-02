import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import './BuilderSection.css';
import PropertyPopup from '../Popup/PropertyPopup'; // Import the popup component

const CarouselContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px;
`;

const buildersData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/800x400?text=Kedia+Real+Estate',
    builderName: 'Kedia Real Estate',
    location: 'Vaishali Nagar, Jaipur',
    price: '₹59.0L - ₹82.0L',
    type: '3 BHK Villa',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/800x400?text=Ganga+Kotecha',
    builderName: 'Ganga Kotecha',
    location: 'Mansarovar, Jaipur',
    price: '₹44.28L - ₹65.97L',
    type: '2, 3 BHK Apartments',
  },
];

const BuilderSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to track popup visibility
  const [selectedBuilder, setSelectedBuilder] = useState(null); // State to track selected builder details

  const openPopup = (builder) => {
    setSelectedBuilder(builder); // Set the builder details
    setIsPopupOpen(true); // Open the popup
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close the popup
    setSelectedBuilder(null); // Clear the selected builder
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <>
      <CarouselContainer>
        <Slider {...settings}>
          {buildersData.map((builder) => (
            <div className="carousel-item" key={builder.id}>
              <div className="gradient-container">
                {/* Left Content */}
                <div className="content">
                  <h3 className="builder-name">{builder.builderName}</h3>
                  <p className="property-type">{builder.type}</p>
                  <p className="property-location">{builder.location}</p>
                  <strong className="property-price">{builder.price}</strong>
                  <button
                    className="contact-btn"
                    onClick={() => openPopup(builder)} // Open popup with builder details
                  >
                    Contact
                  </button>
                </div>
                {/* Right Image */}
                <div className="image-container">
                  <img
                    src={builder.image}
                    alt={builder.builderName}
                    className="property-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </CarouselContainer>

      {/* Popup Component */}
      {isPopupOpen && selectedBuilder && (
        <PropertyPopup
          isOpen={isPopupOpen}
          onClose={closePopup}
          image={selectedBuilder.image}
          name={selectedBuilder.builderName}
          price={selectedBuilder.price}
        />
      )}
    </>
  );
};

export default BuilderSection;
