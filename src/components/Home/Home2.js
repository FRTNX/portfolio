import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/av1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WELCOME TO MY ONLINE <span className="purple"> PORTFOLIO </span>
            </h1>
            <p className="home-about-body">
             Developing software allows me to move in any direction and make meaningful impact.
              <br />
              <br />My super powers include  
              <i>
                <b className="purple"> Bash, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My area of operations encommpasses
              <i>
                <b className="purple">Fullstack Web Development </b> in modern
                technologies such as the{" "}
                <b className="purple">
                  MERN Stack
                </b> and <b className="purple">Python's FastAPI.</b>
              </i>
              <br />
              <br />
              I am constantly searching for the optimum state. This had led to
              a life of equal parts meditation, equal parts study.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FRTNX"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/frtnx_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/busani-ndlovu-0980a8262"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/saitama_frtnx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                {/* https://lichess.org/@/FRTNX */}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
