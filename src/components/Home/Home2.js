
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I'm <b className="purple">Abhishek Kumar</b>, a
              Computer Science and Engineering student specializing
              in Artificial Intelligence at Bansal Institute of
              Engineering and Technology, affiliated with AKTU.
              <br />
              <br />

              I'm passionate about building intelligent systems,
              solving real-world problems, and transforming raw
              data into meaningful insights.
              <br />
              <br />

              I'm proficient in
              <i>
                <b className="purple">
                  {" "}Python, SQL, Machine Learning, Data Analysis,
                  and Computer Vision.{" "}
                </b>
              </i>
              <br />
              <br />

              My primary areas of interest include
              <i>
                <b className="purple">
                  {" "}Artificial Intelligence, Data Engineering,
                  Deep Learning, and Automation.{" "}
                </b>
              </i>
              <br />
              <br />

              I enjoy developing practical projects such as
              <b className="purple"> SentinelAI, DataFlow360, </b>
              and
              <b className="purple"> NEXUS-AI </b>
              to strengthen my technical skills and explore
              modern technologies.
              <br />
              <br />

              My goal is to become a skilled
              <b className="purple"> AI & Data Engineer </b>
              and contribute to innovative, impactful solutions.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
