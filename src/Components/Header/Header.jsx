import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Header.css";
import { home_slider } from "../../img/PropertyImages/propertyImages";
import { Typewriter } from "react-simple-typewriter";
import {bl1, bm1} from '../../img/bannerImg.js';

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const sliderImages = Object.values(home_slider);

  return (
    <Container fluid className="header-container">
      <Row className="banner-container"> 
        <img src={bl1} alt="" />
      </Row>
      {/* <Row className="align-items-center">
        <Col lg={6} md={6} sm={12} className="text-container">
          <h1>Search for Your Dream Properties...
          </h1>
          <p>
            Discover the most luxurious{" "}
            <span className="typing-effect">
              <Typewriter
                words={["Villas", "Farm Houses", "Flats"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1500}
              />
            </span>{" "}
            <br/>
            designed to meet all your expectations. Explore unmatched comfort
            and elegance.
            From modern designs to timeless architecture, our properties are
            crafted to perfection. Experience a lifestyle that blends luxury
            with convenience, tailored just for you.
          </p>
        </Col>

        <Col lg={6} md={6} sm={12} className="slider-container">
          <Slider {...settings}>
            {sliderImages.map((image, index) => (
              <div key={index} className="slider-image">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Header;
