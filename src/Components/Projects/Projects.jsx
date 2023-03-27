import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../images/project-img1.png";
import projImg2 from "../images/project-img2.png";
import projImg3 from "../images/project-img3.png";
import projImg4 from "../images/project-img4.png";
import projImg5 from "../images/project-img5.png";
import projImg6 from "../images/project-img6.png";
import TrackVisibility from "react-on-screen";
function Projects({ pcolors2 }) {
  const projects = [
    {
      title: "card design",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Logo Design",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Logo Design",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Web Design",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Web Design",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Web Design",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section
      className="project" data-aos="fade-up"
      data-aos-duration="3000"
      id="project"
    >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div

                >
                  <h2>Projects</h2>
                  <p className={pcolors2}>
                    "My projects aim to develop web designs with modern and
                    user-friendly interfaces."
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"

                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
  );
}
export default Projects;
