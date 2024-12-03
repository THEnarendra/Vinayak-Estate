import React from 'react';
import './FocusProjects.css';

const FocusProjects = () => {
  return (
    <div className="focus-section">
      {/* Heading */}
      <div className="focus-heading">
        <h2>Projects in <span className="highlight">Focus</span></h2>
        <p>Noteworthy projects in Jaipur</p>
      </div>

      {/* Card */}
      <div className="focus-card">
        {/* Left Column: Image */}
        <div className="card-image">
          <img
            src="https://via.placeholder.com/400x300" // Replace with actual image URL
            alt="The Sky Bungalows"
          />
        </div>

        {/* Right Column: Content */}
        <div className="card-content">
          <h3 className="card-title">The Sky Bungalows</h3>
          <p className="card-subtitle">by One Realty</p>
          <p className="card-details">3, 4, 5, 6, 7 BHK Apartment, Penthouse</p>
          <p className="card-location">Vaishali Nagar, Jaipur</p>
          <p className="card-price">₹2.06 Cr - ₹5.26 Cr</p>
        </div>
      </div>
    </div>
  );
};

export default FocusProjects;
