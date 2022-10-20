import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const Project = (props) => {
  return (
    <Container style={{ width: "40vw" }}>
      <Row className="text-center">{props.name}</Row>
      <Row>{props.description}</Row>
      <Row>
        <Image>{props.imgSrc}</Image>
      </Row>
    </Container>
  );
};

export default Project;
