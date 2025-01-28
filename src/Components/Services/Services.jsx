import React, { useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import landsImage from "../../img/land.png";
import flatsImage from "../../img/flats.jpg";
import villasImage from "../../img/services.jpg";
import farmhousesImage from "../../img/farmHouse.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing for the animation
      once: true, // Animation will happen only once when the element is scrolled into view
    });
  }, []);

  return (
    <Container className="services-container">
     <Row className="w-100 mx-0 d-flex justify-content-center">
    <Col md={12} className="text-center">
      <h4 className="services-intro" data-aos="fade-up">
        We provide a diverse range of real estate solutions, including Lands, Flats, Villas, and Farm Houses. Whether you're looking for investment opportunities, a modern apartment, a luxury home, or a peaceful getaway, we have the perfect property for you.
      </h4>
    </Col>
  </Row>

      {/* Services List */}
      {[
        { 
          title: "Lands", 
          image: landsImage, 
          description: "Explore a wide range of residential and commercial land options in prime locations. Secure the perfect plot to build your dream home or investment project. Our land offerings span across various regions, ensuring that you have access to the best locations for future growth. Whether you're looking for land in an urban setting for business development or a tranquil rural plot for personal use, we have options to suit every need. With expert advice and guidance, we help you make an informed decision to ensure the success of your project.", 
          reverse: false 
        },
        { 
          title: "Flats", 
          image: flatsImage, 
          description: "Discover modern and well-designed apartments that offer comfort, security, and convenience. Perfect for families and individuals looking for a hassle-free living experience. Our flats are situated in some of the most desirable locations, offering excellent connectivity to schools, markets, and transportation hubs. With a range of sizes and layouts, you can find the ideal space that fits your needs. From luxurious penthouses to affordable studio apartments, our flats cater to diverse preferences, ensuring that you live in a space that suits your lifestyle.", 
          reverse: true 
        },
        { 
          title: "Villas", 
          image: villasImage, 
          description: "Experience luxury living with our premium villa listings. Spacious interiors, private gardens, and top-notch amenities make these homes perfect for a lavish lifestyle. Each villa is designed with the utmost attention to detail, offering luxurious features such as private pools, expansive living areas, and high-end finishes. Situated in scenic locations, these villas provide a peaceful retreat from the hustle and bustle of city life, while being close enough to key urban amenities for convenience and access.", 
          reverse: false 
        },
        { 
          title: "Farm Houses", 
          image: farmhousesImage, 
          description: "Escape the city's hustle and unwind in serene farmhouses surrounded by nature. Ideal for weekend getaways, retreats, or permanent countryside living. These properties provide ample space, fresh air, and tranquility, offering a peaceful environment to recharge. Whether you're looking for a rustic farmhouse with modern touches or a spacious estate to host family gatherings, our farmhouses provide the perfect setting for a slower, more peaceful lifestyle away from the urban rush.", 
          reverse: true 
        }
      ].map((service, index) => (
        <Row 
          key={index} 
          className={`services-content ${service.reverse ? 'flex-row-reverse' : ''} mb-5 py-4`} 
          data-aos="fade-up" // Adding animation to each service block
        >
          <Col md={6} className="services-img">
            <img src={service.image} alt={service.title} className="img-fluid" />
          </Col>
          <Col md={6} className="service-text-box">
            <h3 className="service-heading">{service.title}</h3>
            <p className="service-text">{service.description}</p>
          </Col>
        </Row>
      ))}

      {/* "Let's Have a Talk" Section */}
      <Row className="contactUs-section py-5" data-aos="fade-up">
        <Col md={6} className="mb-4">
          <p className="form-title">Let's Have a Talk</p>
          <h2 className="form-heading">Have an upcoming project?</h2>
          <form>
            <Row>
              <Col md={6}>
                <input type="text" className="form-control mb-3" placeholder="Name" />
              </Col>
              <Col md={6}>
                <input type="text" className="form-control mb-3" placeholder="Phone Number" />
              </Col>
            </Row>
            <input type="text" className="form-control mb-3" placeholder="Location" />
            <textarea className="form-control mb-3" rows="3" placeholder="Your Message Here"></textarea>
            <Button type="submit" className="btn btn-warning">Submit Now</Button>
          </form>
        </Col>
        <Col md={6}>
          <h2>Feel Free to Contact Us !!</h2>
          <p>If You Need Any Assistance, Fill the Form and our Team will Connect with you as soon as possible.</p>
        </Col>
      </Row>
    </Container>
  );
}
