import React from "react";
import Header from "../Header/Header";
import BuilderSlider from "../Builder Section/BuilderSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import "./Home.css";
import { interiorImg } from "../../img/PropertyImages/propertyImages";
import { Col, Row } from "react-bootstrap";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";

const Home = () => {
  const images = Object.values(interiorImg);

  return (
    <div className="homeSection">
      <Header />
      <div className="carousel">
        <h1 style={{ fontSize: "3rem" }}>
          Projects in <span>Spotlight </span>
        </h1>
        <p style={{ color: "gray", fontSize: "1.4rem" }}>
          our premium projects
        </p>

        <BuilderSlider />

        <Row className="align-items-center my-5">
          <Col lg={6} md={12} className="text-center">
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="yourSwiper"
            >
              {images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={image}
                    className="swiperImg"
                    alt={`Interior Image ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
            style={{ padding: "1.5rem" }}
          >
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Luxury <span>Interiors</span> 
            </h1>
            <p style={{ fontSize: "1.3rem", color: "#555" }}>
              At <strong>Your Company Name</strong>, we specialize in creating
              bespoke interior designs that redefine elegance and
              sophistication. Whether it’s a cozy residential haven or a vibrant
              commercial space, our expert team blends style, functionality, and
              comfort to craft interiors that truly resonate with your vision.
              From modern minimalist aesthetics to timeless classic designs, we
              tailor every project to reflect your unique taste and lifestyle.
              With attention to detail, premium materials, and innovative ideas,
              we ensure spaces are not only beautiful but also practical. Let us
              transform your dream interiors into a stunning reality that
              inspires and elevates everyday living.
            </p>
          </Col>
        </Row>
        <FeaturedProjects />
      </div>
    </div>
  );
};

export default Home;
