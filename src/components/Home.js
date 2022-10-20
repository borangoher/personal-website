import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "../styles/styleStd.css";

const Home = () => {
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
      <Row
        className="p-2 text-center"
        style={{ position: "relative", left: "10vw", width: "80vw" }}
      >
        <Col>
          <Image src="./bgPhoto.jpg"></Image>
        </Col>
        <Col>
          Hi! I'm Boran Göher, a Fullstack Web Developer and a fourth year
          Electrical & Electronics Engineering student at Boğaziçi University. I
          mainly work with React.js and Express, but you can find a full list of
          my skills by clicking the button below. You can also check out my
          projects or find my contact info if you wish.
        </Col>
      </Row>
      <Row
        style={{
          position: "relative",
          left: "20vw",
          width: "60vw",
        }}
        className="d-flex justify-content-around mt-4"
      >
        <Link to="./skills">
          <Button className="m-1" variant="secondary" size="lg">
            My Skills
          </Button>
        </Link>
        <Link to="./projects">
          <Button className="m-1" variant="secondary" size="lg">
            My Projects
          </Button>
        </Link>
        <Link to="./contacct">
          <Button className="m-1" variant="secondary" size="lg">
            Contact Me!
          </Button>
        </Link>
      </Row>
    </Container>
  );
};

export default Home;
