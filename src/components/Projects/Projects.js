import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cosuju from "../../Assets/Projects/cosuju.png";
import calculus from "../../Assets/Projects/calculus.png";
import shakesperium from "../../Assets/Projects/sp.png";
import luna from "../../Assets/Projects/luna.png";
import worldbank from "../../Assets/Projects/wbp.png";
import mathDrills from "../../Assets/Projects/math-drills.png";

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
              imgPath={luna}
              isBlog={false}
              title="LUNA"
              description="A terminal based chat-bot and research tool built in python and undergoing a major refactor. The goal was to create a research tool that accepts free-form commands and has the option of serving up great conversation on just about anything. "
              ghLink="https://github.com/FRTNX/LUNA-deprecated"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mathDrills}
              isBlog={false}
              title="Math Drills"
              description="A fullstack application built using Typescript and the MERN stack. Math Drills offers a near infinite number of algorithm-generated drills for users to sharpen their math skills on. It also includes a built-in terminal with irc-like channels where users can interact."
              ghLink="https://github.com/FRTNX/math-drills"
              demoLink="https://drills.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shakesperium}
              isBlog={false}
              title="Shakesperium"
              description="An app available on Android and iOS dedicated to making the deeper meanings of Shakespeare's works more accessible. This was a collaborative effort where I built the backend in Nodejs and Typescript while a remote team handled the frontend in React Native."
              demoLink="https://play.google.com/store/apps/details?id=com.dedalus.shakesperium"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cosuju}
              isBlog={false}
              title="Cosuju Dataset"
              description="COurt SUmmaries and JUdgements dataset created using Python and published on huggingface. Here I compiled all court summarries and judgements by the Constitutional Court of South Africa since 1994 into a public dataset that can be used for document parsing by language models."
              ghLink="https://github.com/FRTNX/cosuju-extractor"
              demoLink="https://huggingface.co/datasets/FRTNX/cosuju"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worldbank}
              isBlog={false}
              title="World Bank Projects"
              description="A command-line application written in Python that can be used to extract project information and documents from the World Bank. The data extracted is exported into a JSON file for ease of consumption."
              ghLink="https://github.com/FRTNX/worldbank-projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculus}
              isBlog={false}
              title="Calculus"
              description="Built some calculus functions for graphing systems of equations and finding their solution sets. This is a component program intended for eventual use in online bots and crawlers that may need to make complex calculations on the fly."
              ghLink="https://github.com/FRTNX/calculus"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
