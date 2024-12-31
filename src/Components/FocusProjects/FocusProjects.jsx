import React from 'react';
import './FocusProjects.css';
import img1 from "../../img/Interior Swiper/1.jpg";
import img2 from "../../img/Interior Swiper/2.jpg";

const FocusProjects = () => {
  return (
    <div className="focus-section">
      <div className="focus-heading">
        <h1>Projects in <span className="highlight">Focus</span></h1>
        <p>Noteworthy projects in Jaipur</p>
      </div>
      <div className='fcousProject'>
      <div className="focus-card">
        <div className="card-image">
          <img
            src={img1}
            alt="The Sky Bungalows"
          />
        </div>
        <div className="card-content">
          <h3 className="card-title">The Sky Bungalows</h3>
          <p className="card-subtitle">by One Realty</p>
          <p className="card-details">3, 4, 5, 6, 7 BHK Apartment, Penthouse</p>
          <p className="card-location">Vaishali Nagar, Jaipur</p>
          <p className="card-price">₹2.06 Cr - ₹5.26 Cr</p>
        </div>
      </div>
      <div className="focus-card">
        <div className="card-image">
          <img
            src={img1}
            alt="The Sky Bungalows"
          />
        </div>
        <div className="card-content">
          <h3 className="card-title">The Sky Bungalows</h3>
          <p className="card-subtitle">by One Realty</p>
          <p className="card-details">3, 4, 5, 6, 7 BHK Apartment, Penthouse</p>
          <p className="card-location">Vaishali Nagar, Jaipur</p>
          <p className="card-price">₹2.06 Cr - ₹5.26 Cr</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FocusProjects;
