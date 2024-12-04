import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedProjects.css"; // For custom styling
import img1 from "../../img/Interior Swiper/1.jpg";
import img2 from "../../img/Interior Swiper/2.jpg";
import img3 from "../../img/Interior Swiper/3.jpg";
import img4 from "../../img/Interior Swiper/4.jpg";

const FeaturedProjects = () => {
  const collections = [
    {
      title: "Ready to Move-In",
      description: "Comfortable homes available for immediate use",
      image: img1,
    },
    {
      title: "Townships",
      description: "Redefining community living",
      image: img2,
    },
    {
      title: "Luxury",
      description: "Premium housing for the lifestyle-conscious",
      image: img3,
    },
    {
      title: "Beachside",
      description: "Experience serene beachside living",
      image: img4,
    },
    {
      title: "Urban Living",
      description: "Convenience and style in city living",
      image: img1,
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

  return (
    <div className="featured-collections">
      <h1 className="text-center">Our Collections</h1>
      <p className="text-center">Designed for You</p>
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
                height: "250px",
                position: "relative", // Required for gradient and text
                transition: "transform 0.3s ease",
              }}
            >
              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "40%",
                  background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
                }}
              ></div>

              {/* Text */}
              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 20,
                  color: "#fff",
                  zIndex: 2,
                }}
              >
                <h5 className="mb-1">{collection.title}</h5>
                <p style={{ fontSize: "0.9rem", margin: 0 }}>{collection.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProjects;
