import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../styles/styleStd.css";
import SkillTable from "./SkillTable";

const Skills = () => {
  return (
    <Container
      style={{
        backgroundColor: "#000000",
        color: "#b7b7b7",
        fontSize: "1.7rem",
        minHeight: "81.8vh",
      }}
      className="align-items-center justify-content-center pt-5"
      fluid
    >
      <Row className="d-flex justify-content-center text-center">
        You can find a non-exhaustive list of my technical skills below.
      </Row>
      <Row>
        <SkillTable
          arr={[
            ["./skills/html5.png", "HTML5"],
            ["./skills/css3.png", "CSS3"],
            ["./skills/javascript.png", "JS(ES6)"],
            ["./skills/react.png", "React.js"],
            ["./skills/bootstrap.png", "Bootstrap"],
            ["./skills/tailwind.png", "Tailwind"],
          ]}
          name="Front-End Skills"
        />
        <SkillTable
          arr={[
            ["./skills/node.png", "Node.js"],
            ["./skills/express.png", "Express"],
            ["./skills/pug.png", "Pug/Jade"],
            ["./skills/python.png", "Python"],
            ["./skills/mongodb.png", "MongoDB"],
            ["./skills/mongoose.png", "Mongoose"],
          ]}
          name="Back-End Skills"
        />
        <SkillTable
          arr={[
            ["./skills/webpack.png", "webpack"],
            ["./skills/jest.png", "Jest"],
            ["./skills/git.png", "Git"],
            ["./skills/npm.png", "npm"],
            ["./skills/firebase.png", "Firebase"],
            ["./skills/linux.png", "Linux"],
          ]}
          name="Other Skills"
        />
      </Row>
    </Container>
  );
};

export default Skills;
