import React from "react";
import CountUp from "react-countup";
import "./About.css";
import { Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Row className="about" id="about">
        <Col className="company">
          <h2 className="heading">Vinayak Estate</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            vitae nam a! Consequatur ut veniam iste, temporibus eveniet
            repudiandae quia! Animi quo expedita molestiae deleniti soluta in
            saepe beatae a est. Enim inventore itaque ea voluptas quibusdam
            dolore esse dignissimos?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            vitae nam a! Consequatur ut veniam iste, temporibus eveniet
            repudiandae quia! Animi quo expedita molestiae deleniti soluta in
            saepe beatae a est. Enim inventore itaque ea voluptas quibusdam
            dolore esse dignissimos?
          </p>
        </Col>
        <Col className="stats">
          <div className="apartments">
            <p>
              <CountUp start={0} end={784} duration={2.5} />
              <br /> Apartments
            </p>
          </div>
          <div className="clients">
            <p>
              <CountUp start={0} end={3854} duration={2.5} />
              <br /> Clients
            </p>
          </div>
          <div className="employees">
            <p>
              <CountUp start={0} end={24} duration={2.5} />
              <br /> Employees
            </p>
          </div>
          <div className="awards">
            <p>
              <CountUp start={0} end={14} duration={2.5} />
              <br /> Awards
            </p>
          </div>
        </Col>
      </Row>
      <Row></Row>
    </>
  );
};

export default About;
