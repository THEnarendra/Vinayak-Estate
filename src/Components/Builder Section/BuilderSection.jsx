import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import builders from '../../img/builder.png'
import Slider from "react-slick";
import './BuilderSection.css'

const data = [
  {
    builderName: "Kedia Real Estate",
    builderLogo: "path_to_logo",
    location: "Vaishali Nagar, Jaipur",
    projects: [
      { image: builders, price: "₹59.0L - ₹82.0L", type: "3 BHK Villa" },
      { image: "path_to_project_image2", price: "₹60.0L - ₹85.0L", type: "4 BHK Villa" },
    ],
  },
  {
    builderName: "Vinayak Group",
    builderLogo: "path_to_logo_2",
    location: "Mansarovar, Jaipur",
    projects: [
      { image: "path_to_project_image3", price: "₹77.61L", type: "3, 4 BHK" },
      { image: "path_to_project_image4", price: "₹90.0L", type: "5 BHK Villa" },
    ],
  },
];

export default function BuilderSlider() {
  const [activeBuilder, setActiveBuilder] = useState(0); // Index of the selected builder

  // Settings for the outer slider (builders)
  const outerSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setActiveBuilder(index), // Change active builder on slide change
  };

  // Settings for the inner slider (projects)
  const innerSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="builder-slider">
      {/* Outer Slider for Builders */}
      <Slider {...outerSliderSettings}>
        {data.map((builder, index) => (
          <div key={index} className="builder-card">
            <div className="builder-info">
              <img src={builder.builderLogo} alt={builder.builderName} className="builder-logo" />
              <h3>{builder.builderName}</h3>
              <p>{builder.location}</p>
            </div>
            <a href="#!" className="view-projects">View Projects</a>
          </div>
        ))}
      </Slider>

      {/* Inner Slider for Projects */}
      <div className="project-slider">
        <Slider {...innerSliderSettings}>
          {data[activeBuilder].projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={`Project ${index + 1}`} className="project-image" />
              <div className="project-info">
                <h4>{project.price}</h4>
                <p>{project.type}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
