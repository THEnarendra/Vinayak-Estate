import React from "react";
import "./PropertyPopup.css"; // Assuming you have a CSS file for styling
import { data, useNavigate } from "react-router-dom";

const PropertyPopup = ({ isOpen, onClose, image, name, price, contactInfo, id, propertyType }) => {
  const navigate = useNavigate();
  if (!isOpen) return null; // Don't render if popup is not open

  const handleViewMoreDetails = () => {
    navigate(`${propertyType}/${id}`);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="popup-image">
          <img src={image} alt={name} />
        </div>
        <div className="popup-details">
          <h3>{name}</h3>
          <p><strong>Price:</strong> {price}</p>
          {contactInfo && (
            <div className="contact-info">
              <p><strong>Contact:</strong></p>
              <p><strong>Phone:</strong> {contactInfo.phone}</p>
              <p><strong>Email:</strong> {contactInfo.email}</p>
            </div>
          )}
        </div>
        <button className="view-more-btn" onClick={handleViewMoreDetails}>View more details...</button>
      </div>
    </div>
  );
};

export default PropertyPopup;
