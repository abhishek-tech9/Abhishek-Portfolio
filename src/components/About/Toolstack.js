
import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiVisualstudiocode,
  SiGithub,
  SiGit,
} from "react-icons/si";

import { FaWindows, FaChartBar } from "react-icons/fa";

function Toolstack() {
  const tools = [
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Power BI", icon: <FaChartBar /> },
    { name: "Windows", icon: <FaWindows /> },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          key={index}
        >
          <div style={{ fontSize: "2.5em" }}>
            {tool.icon}
          </div>

          <div className="tech-icons-text">
            {tool.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
