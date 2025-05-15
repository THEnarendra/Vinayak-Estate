import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './ImagesSlider.css';

const ImagesSlider = ({ images }) => {
  return (
    <Row className="luxury-interiors-section align-items-center g-0">
      {/* Images Column - First on mobile, Left on desktop */}
      <Col lg={6} md={12} className="luxury-swiper-col order-lg-1 order-1">
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{ 
            delay: 3000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
          }}
          className="luxury-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-image-container">
                <img
                  src={image}
                  className="swiper-image"
                  alt={`Interior Design ${index + 1}`}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>

      {/* Content Column - Second on mobile, Right on desktop */}
      <Col lg={6} md={12} className="luxury-content-col order-lg-2 order-2">
        <div className="luxury-content">
          <h2 className="luxury-heading">
            Luxury <span>Interiors</span>
          </h2>
          <div className="luxury-divider"></div>
          <p className="luxury-text">
            At <strong>Vinayak Estate</strong>, we specialize in creating
            bespoke interior designs that redefine elegance and
            sophistication.
          </p>
          <p className="luxury-text">
            From modern minimalist aesthetics to timeless classic designs, we
            tailor every project to reflect your unique taste and lifestyle.
          </p>
          <button className="luxury-cta">
            Explore Our Designs
            <i className="fas fa-arrow-right ms-2"></i>
          </button>
        </div>
      </Col>
    </Row>
  );
};

export default ImagesSlider;