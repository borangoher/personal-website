import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "../styles/styleStd.css";

const Project = (props) => {
  return (
    <Container
      className="p-3"
      style={{ width: "420px", backgroundColor: "#000000", color: "#b7b7b7" }}
    >
      <Row
        style={{ fontSize: "2rem" }}
        className="d-flex justify-content-center"
      >
        {props.name}
      </Row>
      <Row style={{ fontSize: "1.5rem" }}>{props.description}</Row>
      <Row>
        <a className="a" href={props.link}>
          <Image src={props.imgSrc}></Image>
        </a>
      </Row>
    </Container>
  );
};

export default Project;
