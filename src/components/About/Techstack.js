
import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiPython,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiHtml5,
  SiCss3,
  SiGit,
  SiSqlite,
  SiReact,
} from "react-icons/si";

import { FaBrain, FaDatabase } from "react-icons/fa";

function Techstack() {
  const skills = [
    { name: "Python", icon: <SiPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "SQLite", icon: <SiSqlite /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Machine Learning", icon: <FaBrain /> },
    { name: "OpenCV", icon: <SiOpencv /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "Git", icon: <SiGit /> },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          key={index}
        >
          <div style={{ fontSize: "2.5em" }}>
            {skill.icon}
          </div>

          <div className="tech-icons-text">
            {skill.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
