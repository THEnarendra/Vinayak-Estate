import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedProjects.css";
import land from "../../img/land.png";
import villa from "../../img/villa.jpg";
import farmHouse from "../../img/farmHouse.png";
import flats from "../../img/flats.jpg";

const FeaturedProjects = () => {
  const navigate = useNavigate();

  const collections = [
    {
      title: "Lands",
      description: "Land available for immediate use",
      image: land,
      type: "lands"
    },
    {
      title: "Villas",
      description: "Redefining community living Villas",
      image: villa,
      type: "villas"
    },
    {
      title: "Farm Houses",
      description: "Premium housing for the lifestyle-conscious",
      image: farmHouse,
      type: "farm-houses"
    },
    {
      title: "Flats",
      description: "Experience serene beachside living",
      image: flats,
      type: "flats"
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const handleCardClick = (type) => {
    navigate(`/${type.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <Container fluid className="featured-projects">
      <Row className=" mb-5">
        <Col xs={12}>
          <h2 className="section-heading-featured-projects">
            Our <span>Collections</span>
          </h2>
          <p className="section-subtitle-featured">Designed for You</p>
        </Col>
      </Row>
      
      <Row>
        <Col xs={12}>
          <Slider {...sliderSettings} className="projects-slider">
            {collections.map((collection, index) => (
              <div key={index}>
                <Row className="justify-content-center projects-slider-row">
                  <Col xs={11} sm={10} md={9} lg={11} xl={10}>
                    <div 
                      className="project-card"
                      onClick={() => handleCardClick(collection.type)}
                    >
                      <div className="project-image" style={{ backgroundImage: `url(${collection.image})` }}>
                        <div className="project-overlay"></div>
                        <div className="project-content">
                          <h3 className="project-title">{collection.title}</h3>
                          <p className="project-description">{collection.description}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedProjects;