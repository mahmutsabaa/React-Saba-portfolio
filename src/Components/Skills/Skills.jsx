import meter1 from "../images/meter1.png";
import meter2 from "../images/meter2.png";
import meter3 from "../images/meter3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos"

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  AOS.init({ duration: 2000 })
  return (
    <section className="skill" id="skills">
      <Container className="skills-container">
        <Row>
          <Col>
            <div className="skill-bx" data-aos="fade-up"
            >
              <h2>Skills</h2>
              <p>
                I am a front-end developer with experience in many different
                technologies <br />
                As programming languages, the ones I know include:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider text-warning "
              >
                <div className="item" data-aos="flip-left"

                >
                  <img src={meter1} alt="img" />
                  <h5>HTML</h5>
                </div>
                <div className="item" data-aos="flip-left"

                >
                  <img src={meter2} alt="img" />
                  <h5>JAVASCRİPT</h5>
                </div>
                <div className="item" data-aos="flip-left"

                >
                  <img src={meter3} alt="img" />
                  <h5>CSS</h5>
                </div>
                <div className="item " data-aos="flip-left"

                >
                  <img src={meter1} alt="img" />
                  <h5>REACT</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <br /><br /><br /><br /><br />
    </section>
  );
}
export default Skills;
