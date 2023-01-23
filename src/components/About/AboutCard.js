import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello world! I'm <span className="purple">Busani </span>
            from <span className="purple"> Bulawayo, Zimbabwe.</span>
            <br />
            I'm a <span className="purple">Fullstack Developer</span> who enjoys the peace of mind of modern typed languages like <span className="purple">Typescript </span>
            and <span className="purple">Python 3.10.</span> Though I currently mostly build <span className="purple">Web Appplications</span> and <span className="purple">API's</span>, I'm gearing towards 
            making my mark in the <span className="purple">Space Industry.</span> To that end I am persuing the relevent degrees in <span className="purple">Physics </span>and <span className="purple">Math.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Edurance Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching How to Code
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
