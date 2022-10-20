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
        className="align-items-center pb-1"
        style={{ color: "#b7b7b7", minHeigth: "11vh" }}
        xs={1}
      >
        <Col text-start xs={3}>
          Contact Me!
        </Col>
        <Col xs={3} />
        <Col className="d-flex justify-content-center" xs={4}>
          <a
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "3vw",
            }}
            className="a"
            href="mailto: boran.goher@boun.edu.tr"
          >
            boran.goher@boun.edu.tr
          </a>
        </Col>
        <Col xs={1}>
          <a className="a" href="https://www.linkedin.com/in/boran.goher">
            <Image
              className="m-1"
              roundedCircle
              src="./linkedinScaled.png"
              fluid
            ></Image>
          </a>
        </Col>
        <Col xs={1}>
          <a className="a" href="https://www.github.com/borangoher">
            <Image
              className="mb-1"
              roundedCircle
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
