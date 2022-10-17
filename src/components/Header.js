import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import styles from "../styles/Color.css";

const Header = () => {
  return (
    <Container className={styles.colorBGBlack} fluid>
      <Row className={styles.colorGray}>
        <Col xs={2}>
          <Link to="/">
            <Image src="./bg.png" fluid></Image>
          </Link>
        </Col>
        <Col xs={4}></Col>
        <Col class="d-flex justify-content-around" xs={6}>
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Me</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
