import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Busani Ndlovu </span>
            from <span className="purple"> Bulawayo, Zimbabwe.</span>
            <br />I am a mid-level dev who loves space-tech and is working towards a physics degree.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Edurance Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Through the crucible we shall become iron."{" "}
          </p>
          <footer className="blockquote-footer">Busani Ndlovu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
