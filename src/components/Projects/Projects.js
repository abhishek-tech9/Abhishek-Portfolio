
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Custom project cover images
import sentinelai from "../../Assets/Projects/sentinelai.png";
import nexusAI from "../../Assets/Projects/nexus-ai.png";
import dataflow360 from "../../Assets/Projects/dataflow360.png";
import fraudDetection from "../../Assets/Projects/fraud-detection.png";
import objectDetection from "../../Assets/Projects/object-detection.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some of the AI, Machine Learning and
          Data Engineering projects I've worked on.
        </p>

        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          {/* Project 1: SentinelAI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentinelai}
              isBlog={false}
              title="SentinelAI"
              description="An AI-powered real-time security monitoring system designed to detect fire, smoke and intrusion. Built using Python, YOLO and computer vision, with a monitoring dashboard, detection evidence and emergency alert features."
              ghLink="https://github.com/abhishek-tech9/SentinelAI"
            />
          </Col>

          {/* Project 2: NEXUS-AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nexusAI}
              isBlog={false}
              title="NEXUS-AI"
              description="A personal AI assistant project featuring a local language model, permanent conversation memory and hybrid smart search. Built using Python, FastAPI, Ollama and SQLite to explore intelligent assistant development."
            />
          </Col>

          {/* Project 3: DataFlow360 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataflow360}
              isBlog={false}
              title="DataFlow360"
              description="A Data Engineering project focused on building an ETL pipeline. It extracts, cleans, validates and transforms data using Python and SQL, with PostgreSQL for structured storage and analytical queries."
            />
          </Col>

          {/* Project 4: Fraud Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fraudDetection}
              isBlog={false}
              title="Fraud Detection System"
              description="A Machine Learning project for identifying potentially fraudulent transactions. Includes data preprocessing, classification, model evaluation and threshold-based prediction analysis."
            />
          </Col>

          {/* Project 5: Object Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={objectDetection}
              isBlog={false}
              title="Real-Time Object Detection"
              description="A computer vision project that detects and identifies objects in real time using Python, OpenCV and YOLO. Explores image processing, live detection and visual prediction results."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
