
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p style={{ textAlign: "justify" }}>
            Hi Everyone! I'm{" "}
            <span className="purple">Abhishek Kumar</span>{" "}
            from{" "}
            <span className="purple">Uttar Pradesh, India.</span>
            <br />
            <br />

            I'm pursuing a{" "}
            <span className="purple">
              B.Tech in Computer Science and Engineering
              (Artificial Intelligence)
            </span>{" "}
            at Bansal Institute of Engineering and Technology,
            affiliated with AKTU (2023–2027).
            <br />
            <br />

            I'm passionate about{" "}
            <span className="purple">
              Artificial Intelligence, Machine Learning,
              Data Engineering and Computer Vision.
            </span>
            <br />
            <br />

            I enjoy developing real-world technical solutions
            and continuously improving my problem-solving skills.
            Some of my projects include{" "}
            <span className="purple">
              SentinelAI, DataFlow360 and NEXUS-AI.
            </span>
            <br />
            <br />

            Apart from coding, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>

            <li className="about-activity">
              <ImPointRight /> Building AI Projects
            </li>

            <li className="about-activity">
              <ImPointRight /> Learning and Solving Problems
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning ideas into intelligent solutions."
          </p>

          <footer className="blockquote-footer">
            Abhishek Kumar
          </footer>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
