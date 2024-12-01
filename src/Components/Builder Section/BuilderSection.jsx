// RealEstateCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  margin: auto;

  .slick-slide img {
    display: block;
    margin: auto;
    border-radius: 10px;
  }
`;

const realEstateData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/800x400?text=Property+1',
    title: 'Luxury Apartment',
    location: 'New York, NY',
    price: '$1,500,000',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/800x400?text=Property+2',
    title: 'Beachfront Villa',
    location: 'Miami, FL',
    price: '$2,800,000',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/800x400?text=Property+3',
    title: 'Modern Loft',
    location: 'San Francisco, CA',
    price: '$950,000',
  },
];

const RealEstateCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {realEstateData.map((property) => (
          <div key={property.id}>
            <img src={property.image} alt={property.title} />
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <strong>{property.price}</strong>
            </div>
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default RealEstateCarousel;
