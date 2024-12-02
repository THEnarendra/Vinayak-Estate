import React from "react";
import "./PropertyPopup.css";

const PropertyPopup = ({ isOpen, onClose, image, name, price }) => {
  if (!isOpen) return null; // Don't render if popup is not active

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="popup-content">
          <div className="popup-image">
            <img src={image} alt={name} />
          </div>
          <div className="popup-details">
            <h3>{name}</h3>
            <p><strong>Price:</strong> {price}</p>
            <button className="contact-btn">Contact Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPopup;
