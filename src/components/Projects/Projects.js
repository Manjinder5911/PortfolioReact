import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import coinNest from "../../Assets/Projects/CoinNest1.jpeg"
import divisonAlgorithm from "../../Assets/Projects/DivisionAlgorithm.jpeg"
import Ecommerce from "../../Assets/Projects/EcommerceHome.png"
import fitflex from "../../Assets/Projects/FitFlex.jpeg"
import RoamingRazor from "../../Assets/Projects/RoamingRazors.jpeg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RoamingRazor}
              isBlog={false}
              title="Roaming Razor"
              description="An on-demand hairstyling platform connecting users with professional stylists for home services. Built with .NET Razor Pages, C#, and JavaScript, the platform features a user-friendly interface, seamless booking functionality, and secure payments integrated via the PayPal API. This project emphasizes robust backend development, secure transactions, and a responsive user experience."
              ghLink="https://github.com/Manjinder5911/RoamingRazor"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coinNest}
              isBlog={false}
              title="Coin Nest"
              description="Coin Nest is a cryptocurrency platform showcasing a dynamic frontend built with HTML, CSS, and Vanilla JavaScript. It features a responsive design, interactive UI, and cryptocurrency data simulation. The project highlights skills like DOM manipulation, responsive layouts, and modern design principles."
              ghLink="https://github.com/Manjinder5911/CoinNest"
              demoLink="https://manjinder5911.github.io/CoinNest/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={divisonAlgorithm}
              isBlog={false}
              title="Divison Algorithm"
              description="Educational platform designed to explain the Integer Divide Algorithm in MIPS. Built using HTML, CSS, and Vanilla JavaScript, the site uses engaging animations and smooth transitions to visualize the algorithm. The project combines technical concepts with interactive design to enhance learning and comprehension."
              ghLink="https://github.com/Manjinder5911/IntegerDivideAlgorithm"
              demoLink="https://manjinder5911.github.io/IntegerDivideAlgorithm/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="Style Sync"
              description="Stylish e-commerce platform showcasing a wide range of wearable products. It features a dynamic and responsive frontend design, allowing users to explore products seamlessly. The project highlights essential e-commerce functionalities like product browsing, interactive UI, and a visually appealing layout."
              ghLink="https://github.com/Manjinder5911/StyleSync"
              demoLink="https://manjinder5911.github.io/StyleSync/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitflex}
              isBlog={false}
              title="Fit Flex"
              description="Modern and engaging landing page designed to attract new members to a gym. It features a responsive design, vibrant visuals, and interactive elements to showcase the gym's facilities, services, and membership offers. The project emphasizes user engagement through smooth transitions and eye-catching layouts"
              ghLink="https://github.com/Manjinder5911/FitFlex"
              demoLink="https://manjinder5911.github.io/FitFlex/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
