import React from "react";
import styled from "styled-components";
import marek from "../img/marek.png";
import linkedin from "../img/linkedin.svg";
import github from "../img/github.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px auto 60px;
  img {
    width: 45px;
    height: auto;
    margin: 20px;
  }
`;

const Image = styled.img`
  width: 52px;
  margin-top: 130px;
`;

function About() {
  return (
    <>
      <Image src={marek} alt={"photography"} />
      <h1>Marek Bilnicki</h1>
      <p>
        I am engineer from Warsaw looking for cool projects and fruitful
        cooperation. Here’s some more info about me
      </p>
      <Container>
        <img alt="gthub" src={github} />

        <img alt="linkedin" src={linkedin} />
      </Container>
    </>
  );
}

export default About;
