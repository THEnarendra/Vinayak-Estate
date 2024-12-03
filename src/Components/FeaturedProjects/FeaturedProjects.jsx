import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedProjects.css"; // Optional for custom styling
import img1 from '../../img/Interior Swiper/1.jpg'
import img2 from '../../img/Interior Swiper/2.jpg'
import img3 from '../../img/Interior Swiper/3.jpg'
import img4 from '../../img/Interior Swiper/4.jpg'

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
      <h2 className="text-center">Featured Collections</h2>
      <p className="text-center">Handpicked projects for you</p>
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <h5 className="mb-2">{collection.title}</h5>
              <p>{collection.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProjects;
