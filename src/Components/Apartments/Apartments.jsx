import React from "react";
import { Row, Col, Button, Container, Card } from "react-bootstrap";
import "./Apartments.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import propertyData from "../../staticData/propertyData";

const Apartments = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const apartments = id === "Lands" ? propertyData.LandData : id=== "Villas" ? propertyData. VillasData : id === "Farm%20Houses" ? propertyData.FarmHouseData : propertyData.FlatsData;

  const handleNavigate = (data) => {
    navigate(`/propertyDetails/${id}/${data}`);
  };

  return (
    <Container fluid className="apartments-page">
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

      <Row>
        {apartments.map((apartment) => (
          <Col key={apartment.id} md={12} className="mb-3">
            <Card className="apartment-card">
              <Row>
                <Col md={3} onClick={()=>handleNavigate(apartment.id)} className="apartment-image">
                  <div
                    style={{
                      backgroundImage: `url(${apartment.images?.length > 0 ? apartment.images?.[0] : ""})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "150px",
                      borderRadius: "8px",
                    }}>
                    <span className="badge bg-dark">16 Dec 2024</span>
                  </div>
                </Col>

                <Col md={6} className="apartment-details">
                  <h5 onClick={handleNavigate}>{apartment.title}</h5>
                  <Row className="my-2">
                    <Col>
                      <p>
                        <strong>Address:</strong> {apartment.location.address + ", " + apartment.location.city + ", " + apartment.location.state}
                      </p>
                      <p>
                        <strong>Carpet Area:</strong> {apartment.propertyDetails.dimensions + ", " + apartment.propertyDetails.size}
                      </p>
                    </Col>
                  </Row>
                </Col>

                {/* <Col md={3} className="apartment-actions text-center">
                  <h4>{apartment.price}</h4>
                  <p>{apartment.pricePerSqft}</p>
                  <Button className="mb-2">
                    Contact Owner
                  </Button>
                  <Button>Get Phone No.</Button>
                </Col> */}
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Apartments;
