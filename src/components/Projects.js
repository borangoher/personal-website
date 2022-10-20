import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Project from "./Project";

const Projects = () => {
  return (
    <Container
      style={{
        backgroundColor: "#000000",
        color: "#b7b7b7",
        fontSize: "1.7rem",
        minHeight: "81.8vh",
      }}
      className="align-items-center justify-content-center pt-3 pl-n5"
      fluid
    >
      <Row className="d-flex justify-content-center text-center">
        You can find some of my pet projects below.
      </Row>
      <Row>
        <Project
          name="Weather App"
          description="A weather app utilizing the OpenWeather API"
          link="https://borangoher.github.io/weatherapp"
          imgSrc="/weatherapp.png"
        />
        <Project
          name="Where's Waldo"
          description="A Where's Waldo game playable on browser"
          link="https://borangoher.github.io/whereswaldo"
          imgSrc="/whereswaldo.png"
        />
      </Row>
    </Container>
  );
};

export default Projects;
