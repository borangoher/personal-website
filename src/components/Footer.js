import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import styles from "../styles/Color.css";

const Footer = () => {
  return (
    <Container className={styles.colorBGBlack} fluid>
      <Row className={styles.colorGray}>
        <Col text-start xs={3}>
          Contact Me!
        </Col>
        <Col text-end xs={5}>
          <a href="mailto: boran.goher@boun.edu.tr">boran.goher@boun.edu.tr</a>
        </Col>
        <Col xs={2}>
          <a href="linkedin.com/in/boran.goher">
            <Image src="./linkedin.png" fluid></Image>
          </a>
        </Col>
        <Col xs={2}>
          <a href="github.com/borangoher">
            <Image
              className={styles.colorBGGray}
              src="./github.png"
              fluid
            ></Image>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
