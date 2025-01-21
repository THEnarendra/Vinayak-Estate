import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
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
    },
    {
      title: "Villas",
      description: "Redefining community living Villas",
      image: villa,
    },
    {
      title: "Farm Houses",
      description: "Premium housing for the lifestyle-conscious",
      image: farmHouse,
    },
    {
      title: "Flats",
      description: "Experience serene beachside living",
      image: flats,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleCardClick = (type) => {
    navigate(`/${type}`);
  };

  return (
    <div className="featured-collections">
      <h1 className="text-center">
        Our <span>Collections</span>
      </h1>
      <p className="text-center para2">Designed for You</p>
      <Slider {...sliderSettings} className="mt-4">
        {collections.map((collection, index) => (
          <div key={index} className="collection-card">
            <div
              className="card"
              style={{
                backgroundImage: `url(${collection.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                overflow: "hidden",
                height: "350px",
                position: "relative",
                transition: "transform 0.3s ease",
              }}
              onClick={() => handleCardClick(collection.title)}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "40%",
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 20,
                  color: "#fff",
                  zIndex: 2,
                }}
              >
                <h3 className="mb-1">{collection.title}</h3>
                <p style={{ fontSize: "1rem", margin: 0 }}>
                  {collection.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProjects;
