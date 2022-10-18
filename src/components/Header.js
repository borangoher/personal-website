import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container style={{ backgroundColor: "#000000" }} fluid>
      <Row style={{ color: "#b7b7b7", minHeight: "11vh" }}>
        <Col className="w-50 m-2">
          <Link className="a" to="/">
            <Image
              className="border border-secondary b-2"
              src="./bgScaled.png"
            ></Image>
          </Link>
        </Col>
        <Col class="d-flex align-items-center w-50 justify-content-around">
          <Link className="a" to="/">
            Home
          </Link>
          <Link className="a" to="/skills">
            Skills
          </Link>
          <Link className="a" to="/projects">
            Projects
          </Link>
          <Link className="a" to="/contact">
            Contact Me
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
