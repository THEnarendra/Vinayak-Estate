import React from "react";
import { Row, Col, Button, Container, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import propertyData from "../../staticData/propertyData";
import "./Apartments.css";

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
    id === "lands"
      ? propertyData.LandData
      : id === "villas"
      ? propertyData.VillasData
      : id === "farm-houses"
      ? propertyData.FarmHouseData
      : propertyData.FlatsData;

  const handleNavigate = (data) => {
    navigate(`/${id}/${data}`);
  };

  return (
    <Container fluid className="apartments-page">
      <Row className="mb-3 align-items-center apartments-page-header">
        <Col>
          <h4>
            {apartments.length} results || <span>{id}</span> for Sale in Jaipur
          </h4>
          <p>Explore Luxury {id} in Jaipur.</p>
        </Col>
      </Row>

      {apartments.length === 0 ? (
        <NoData category={id} />
      ) : (
        <Row>
          {apartments.map((apartment) => (
            <Col key={apartment.id} md={12} className="mb-3">
              <Card className="apartment-card">
                <Row>
                  <Col
                    onClick={() => handleNavigate(apartment.id)}
                    className="apartment-image"
                  >
                    <div
                      style={{
                        backgroundImage: `url(${
                          apartment.images?.length > 0
                            ? apartment.images?.[0]
                            : ""
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "8px",
                        width: "100%",
                        height: "15rem"
                      }}
                    >
                      <span className="badge bg-dark">{id}</span>
                    </div>
                  </Col>

                  <Col md={8} className="apartment-details">
                    <h5 onClick={() => handleNavigate(apartment.id)}>
                      {apartment.title}
                    </h5>
                    <Row className="my-2">
                      <Col>
                        <p className="apartment-details-description">
                          {apartment?.description}
                        </p>
                        <p className="apartment-details-description">
                          <strong>Address:</strong>{" "}
                          {apartment.location}
                        </p>
                        <p className="apartment-details-description">
                          <strong>Size:</strong>{" "}
                          {apartment.propertyDetails.size}
                        </p>
                      </Col>
                    </Row>
                    {/* <Button 
                      variant="primary" 
                      className="apartment-actions"
                      onClick={() => handleNavigate(apartment.id)}
                    >
                      View Details
                    </Button> */}
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