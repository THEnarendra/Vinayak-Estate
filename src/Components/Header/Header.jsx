import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Header.css";
import { home_slider } from "../../img/PropertyImages/propertyImages";

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
      <Row className="align-items-center">
        <Col lg={6} md={6} sm={12} className="text-container">
          <h1 >
            Welcome to Your Dream Properties...
          </h1>
          <p>
            Discover the most luxurious{" "}
            <span style={{ color: "#6200ea" }}>
              Villas || Farm Houses || Flats
            </span>{" "}
            designed to meet all your expectations. Explore unmatched comfort
            and elegance. <br />
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
      </Row>
    </Container>
  );
};

export default Header;
