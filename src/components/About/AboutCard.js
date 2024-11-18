import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manjinder Singh </span>
            from <span className="purple"> Red Deer, Canada.</span>
            <br />
            I am currently employed as a Record Support at Government of Alberta.
            <br />
            I have completed Graduation in Computer Science at Columbia College, Vancouver.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving Leetcode Problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Evening Walks
            </li>
          </ul>
{/* 
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Manjinder</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
