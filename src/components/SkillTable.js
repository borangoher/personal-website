import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../styles/styleStd.css";
import SkillIcon from "./SkillIcon";

const SkillTable = (props) => {
  return (
    <Container className="skill-cont">
      <Row
        style={{ marginBottom: "10px" }}
        className="text-center justify-content-center"
      >
        {props.name}
      </Row>
      <Row className="d-flex justify-content-center">
        {props.arr.map((element) => {
          return <SkillIcon srcImg={element[0]} imgName={element[1]} />;
        })}
      </Row>
    </Container>
  );
};

export default SkillTable;
