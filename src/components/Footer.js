import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../styles/styleStd.css";

const Footer = () => {
  return (
    <Container style={{ backgroundColor: "#000000" }} fluid>
      <Row
        className="align-items-center"
        style={{ color: "#b7b7b7", maxHeigth: "100%" }}
        xs={1}
      >
        <Col text-start xs={3}>
          Contact Me!
        </Col>
        <Col text-end xs={5}>
          <a className="a" href="mailto: boran.goher@boun.edu.tr">
            boran.goher@boun.edu.tr
          </a>
        </Col>
        <Col xs={2}>
          <a className="a" href="linkedin.com/in/boran.goher">
            <Image className="m-1" src="./linkedinScaled.png" fluid></Image>
          </a>
        </Col>
        <Col xs={2}>
          <a href="github.com/borangoher">
            <Image
              className="m-1"
              style={{ backgroundColor: "#b7b7b7" }}
              src="./githubScaled.png"
              fluid
            ></Image>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
