import React from "react";
import { Row, Col, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import propertyData from "../../staticData/propertyData";
import "./Apartments.css";

// NoData Component
const NoData = ({ category }) => {
  return (
    <div className="no-data">
      <h2>No Data Found for {category}</h2>
      <p>Check out our upcoming listings for {category} in the near future.</p>
      <Button variant="outline-primary" size="sm">
        Explore Upcoming Listings →
      </Button>
    </div>
  );
};

const Apartments = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const apartments =
  id === "Lands"
    ? propertyData.LandData
    : id === "Villas"
    ? propertyData.VillasData
    : id === "Farm Houses" // Fixed the condition to match the URL param
    ? propertyData.FarmHouseData
    : propertyData.FlatsData;


  const handleNavigate = (data) => {
    navigate(`/propertyDetails/${id}/${data}`);
  };

  return (
    <Container fluid className="apartments-page">
      <Row className="mb-3 align-items-center">
        <Col>
          <h4>{apartments.length} results | {id} for Sale in Jaipur</h4>
          <p>Explore Luxury {id} in Jaipur.</p>
        </Col>
        <Col xs="auto">
          <Button variant="outline-primary" size="sm">
            Add Localities for more relevant results →
          </Button>
        </Col>
      </Row>

      {/* Conditionally Render No Data Component or Apartments */}
      {apartments.length === 0 ? (
        <NoData category={id} />
      ) : (
        <Row>
          {apartments.map((apartment) => (
            <Col key={apartment.id} md={12} className="mb-3">
              <Card className="apartment-card">
                <Row>
                  <Col
                    md={3}
                    onClick={() => handleNavigate(apartment.id)}
                    className="apartment-image"
                  >
                    <div
                      style={{
                        backgroundImage: `url(${
                          apartment.images?.length > 0 ? apartment.images?.[0] : ""
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "150px",
                        borderRadius: "8px",
                      }}
                    >
                      <span className="badge bg-dark">16 Dec 2024</span>
                    </div>
                  </Col>

                  <Col md={6} className="apartment-details">
                    <h5 onClick={() => handleNavigate(apartment.id)}>
                      {apartment.title}
                    </h5>
                    <Row className="my-2">
                      <Col>
                        <p>
                          <strong>Address:</strong> {apartment.location + ", " + apartment.location.city + ", " + apartment.location.state}
                        </p>
                        <p>
                          <strong>Carpet Area:</strong> {apartment.propertyDetails.dimensions + ", " + apartment.propertyDetails.size}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Apartments;
