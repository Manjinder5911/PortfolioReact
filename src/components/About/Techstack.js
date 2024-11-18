import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGithub,FaHtml5,FaCss3 } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiMysql,
} from "react-icons/di";
import {
  SiNextdotjs,
} from "react-icons/si";
import {TbBrandCSharp } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCSharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGithub/>
      </Col>
    </Row>
  );
}

export default Techstack;
