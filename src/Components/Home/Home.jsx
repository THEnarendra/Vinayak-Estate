import React from 'react';
import Header from '../Header/Header';
import BuilderSlider from '../Builder Section/BuilderSection';
import FocusProjects from '../FocusProjects/FocusProjects';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';
import './Home.css';
import img from '../../img/Interior Swiper/interiorImg';
import { Col, Row } from 'react-bootstrap';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="homeSection">
      <Header />
      <div className="carousel">
        <h1>Projects in <span>Spotlight </span></h1>
        <p style={{ color: "gray" }}>our premium projects</p>

        <BuilderSlider />
        <FocusProjects />

        <Row className="align-items-center my-5">
          <Col lg={6} md={12} className="text-center">
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="yourSwiper">
              {img.map((image, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                  <img
                    src={image.url}
                    className="swiperImg"
                    alt={image.alt || 'Project Image'}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '10px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col
            lg={6}
            md={12}
            className="d-flex flex-column justify-content-center text-start"
            style={{ paddingRight: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Luxury Interiors</h1>
            <p style={{ fontSize: '1.2rem', color: '#555' }}>
              At <strong>Your Company Name</strong>, we redefine elegance with our tailored interior designs. From cozy residential spaces to dynamic commercial projects, our team creates environments that combine style, functionality, and comfort. Let's turn your vision into reality.
            </p>
            <button
              style={{
                marginTop: '1rem',
                padding: '0.6rem 1rem',
                backgroundColor: '#4e00b7',
                border: 'none',
                borderRadius: '5px',
                color: '#fff',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                alignSelf: 'flex-start',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#007BFF')}
            >
              Learn More
            </button>
          </Col>
        </Row>
        <FeaturedProjects />
      </div>
    </div>
  );
};

export default Home;
