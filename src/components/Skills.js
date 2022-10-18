import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../styles/styleStd.css";

const Home = () => {
  return (
    <Container
      style={{
        backgroundColor: "#000000",
        color: "#b7b7b7",
        fontSize: "1.7rem",
        minHeight: "80vh",
      }}
      className="align-items-center justify-content-center pt-5"
      fluid
    ></Container>
  );
};

export default Home;
