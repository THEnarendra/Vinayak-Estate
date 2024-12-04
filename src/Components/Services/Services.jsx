import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import serviceImage from "../../img/services.jpeg";  // Ensure the image path is correct
import './Services.css'; // Import custom styles

export default function Services() {
  return (
    <>
      <div className="services">
        {/* Intro Section */}
        <div className="services-intro">
          <p className="services-heading">Services</p>
          <p className="services-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo unde quia recusandae explicabo possimus, tempora delectus ex consequatur fuga quam assumenda quibusdam labore fugiat facere esse.
          </p>
        </div>

        {/* Services Content Section */}
        <div className="services-content">
          {/* Service Image */}
          <div className="services-img">
            <img src={serviceImage} alt="Services" />
          </div>

          {/* Service Details */}
          <div className="service">
            <div>
              <p className="service-heading">Renting</p>
              <p className="service-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus officia modi dolores voluptates quod esse culpa delectus rerum corporis sed alias ex, porro mollitia placeat omnis? Laborum ducimus consequuntur harum.
              </p>
            </div>

            <div>
              <p className="service-heading">Selling</p>
              <p className="service-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus officia modi dolores voluptates quod esse culpa delectus rerum corporis sed alias ex, porro mollitia placeat omnis? Laborum ducimus consequuntur harum.
              </p>
            </div>

            <div>
              <p className="service-heading">Building</p>
              <p className="service-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus officia modi dolores voluptates quod esse culpa delectus rerum corporis sed alias ex, porro mollitia placeat omnis? Laborum ducimus consequuntur harum.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <Row className="contactUs-section">
        <Col md={6}>
          <p className="form-title">Let's Have a Talk</p>
          <h2 className="form-heading">Have an upcoming project?</h2>
          <form>
            <Row>
              <Col md={6}>
                <Row className="mb-3">
                  <Col>
                    <input type="text" className="form-control" placeholder="Name" />
                  </Col>
                  <Col>
                    <input type="text" className="form-control" placeholder="Phone Number" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <input type="text" className="form-control" placeholder="Location" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <textarea className="form-control" rows="3" placeholder="Your Message Here"></textarea>
                  </Col>
                </Row>
                <Button type="submit" className="btn btn-warning">
                  Submit Now
                </Button>
              </Col>
            </Row>
          </form>
        </Col>

        <Col md={6} style={{ padding: "30px 120px", textAlign: "center" }}>
          <h2>Feel Free to Contact Us !!</h2>
          <p>If You Need Any Assistance Fill the Form and our Team will Connect with you as soon as possible.</p>
        </Col>
      </Row>
    </>
  );
}
