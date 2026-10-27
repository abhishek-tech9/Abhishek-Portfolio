
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Portfolio of Abhishek Kumar</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AK</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">

            <li className="social-icons">
              <a
                href="https://github.com/abhishek-tech9"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/abhishek-119299329/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/ofcl_abhi/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
