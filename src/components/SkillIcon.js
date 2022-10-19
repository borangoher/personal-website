import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "../styles/styleStd.css";

const SkillIcon = (props) => {
  return (
    <Container
      style={{
        width: "66px",
        height: "66px",
        marginTop: "15px",
        marginBottom: "15px",
        left: "-25px",
      }}
    >
      <Image src={props.srcImg} className="skill"></Image>
      <div className="skillText">{props.imgName}</div>
    </Container>
  );
};

export default SkillIcon;
