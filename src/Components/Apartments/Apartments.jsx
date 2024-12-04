import React from "react";
import { Row, Col, Button, Container, Card } from "react-bootstrap";
import "./Apartments.css"; // For custom styles
import img from '../../img/Interior Swiper/1.jpg'
import { useNavigate } from "react-router-dom";

const Apartments = () => {
  const navigate = useNavigate();
  
  const apartments = [
    {
      id: 1,
      title: "3 BHK Flat for Sale in Jagatpura, Jaipur",
      carpetArea: "1550 sqft",
      status: "Ready to Move",
      floor: "Ground out of 3",
      price: "₹85 Lac",
      pricePerSqft: "₹4,570 per sqft",
      owner: "Rahul",
      updated: "Updated today",
      premium: true,
      features: ["East Facing Property", "Opposite Jagatpura Railway Flyover"],
      image: img, // Replace with actual image paths
    },
    {
      id: 2,
      title: "4 BHK Flat for Sale in Sodala, Jaipur",
      superArea: "2300 sqft",
      status: "Ready to Move",
      floor: "3 out of 4",
      price: "₹1.35 Cr",
      pricePerSqft: "₹5,870 per sqft",
      owner: "Ativeer Jain",
      updated: "Updated today",
      premium: true,
      features: ["East Facing Property", "Newly Constructed Property"],
      image: img, // Replace with actual image paths
    },
    {
      id: 3,
      title: "3 BHK Flat for Sale in Jagatpura, Jaipur",
      carpetArea: "1550 sqft",
      status: "Ready to Move",
      floor: "Ground out of 3",
      price: "₹85 Lac",
      pricePerSqft: "₹4,570 per sqft",
      owner: "Rahul",
      updated: "Updated today",
      premium: true,
      features: ["East Facing Property", "Opposite Jagatpura Railway Flyover"],
      image: img, // Replace with actual image paths
    },
    {
      id: 4,
      title: "4 BHK Flat for Sale in Sodala, Jaipur",
      superArea: "2300 sqft",
      status: "Ready to Move",
      floor: "3 out of 4",
      price: "₹1.35 Cr",
      pricePerSqft: "₹5,870 per sqft",
      owner: "Ativeer Jain",
      updated: "Updated today",
      premium: true,
      features: ["East Facing Property", "Newly Constructed Property"],
      image: img, // Replace with actual image paths
    },
    // Add more apartment data
  ];

  const handleNavigate = () => {
    navigate("/propertyDetails");
  };

  return (
    <Container fluid className="apartments-page">
      {/* Header Section */}
      <Row className="mb-3 align-items-center">
        <Col>
          <h4>9256 results | Flats for Sale in Jaipur</h4>
          <p>
            Explore flats in Jaipur in the price range of ₹15 Lac - ₹9.41 Cr with 1-5 BHK options.
          </p>
        </Col>
        <Col xs="auto">
          <Button variant="outline-primary" size="sm">
            Add Localities for more relevant results →
          </Button>
        </Col>
      </Row>

      {/* Tabs and Sorting */}
      <Row className="mb-4">
        <Col>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Apartments (9,256)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                New Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Top Agents
              </a>
            </li>
          </ul>
        </Col>
        <Col xs="auto" className="text-end">
          <select className="form-select form-select-sm">
            <option>Sort by: Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Date: Newest</option>
          </select>
        </Col>
      </Row>

      {/* Apartment Cards */}
      <Row>
        {apartments.map((apartment) => (
          <Col key={apartment.id} md={12} className="mb-3">
            <Card className="apartment-card">
              <Row>
                {/* Left Side: Image */}
                <Col md={3} onClick={handleNavigate} className="apartment-image">
                  <div
                    style={{
                      backgroundImage: `url(${apartment.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "150px",
                      borderRadius: "8px",
                    }}
                  >
                    <span className="badge bg-dark">{apartment.updated}</span>
                  </div>
                </Col>

                {/* Middle: Details */}
                <Col md={6} className="apartment-details">
                  <h5 onClick={handleNavigate}>{apartment.title}</h5>
                  <Row className="my-2">
                    <Col>
                      <p>
                        <strong>Carpet Area:</strong> {apartment.carpetArea || apartment.superArea}
                      </p>
                      <p>
                        <strong>Status:</strong> {apartment.status}
                      </p>
                      <p>
                        <strong>Floor:</strong> {apartment.floor}
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    {apartment.features.map((feature, index) => (
                      <Col key={index} className="mb-1">
                        <span className="badge bg-success">{feature}</span>
                      </Col>
                    ))}
                  </Row>
                </Col>

                {/* Right Side: Price & Actions */}
                <Col md={3} className="apartment-actions text-center">
                  <h4>{apartment.price}</h4>
                  <p>{apartment.pricePerSqft}</p>
                  <Button className="mb-2">
                    Contact Owner
                  </Button>
                  <Button>Get Phone No.</Button>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Apartments;
