import React from "react";
import styled from "styled-components";
import planetoid from "../img/planetoid.png";
import uranus from "../img/uranus.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  > :first-child {
    border-top: 1px solid #27484a;
  }
  p {
    padding: 20px;
    border-bottom: 1px solid #27484a;
    z-index: 2;
  }
  .planetoid {
    position: absolute;
    width: 100px;
    z-index: 1;
    animation: orbiting 60s linear infinite;
  }

  .uranus {
    z-index: 1;
    width: 100px;
    position: absolute;
    right: 0;
    bottom: 120px;
  }

  @keyframes orbiting {
    0% {
      left: -100px;
      top: 50px;
      transform: rotate(0deg);
    }
    10% {
      top: 60px;
    }
    20% {
      top: 80px;
    }
    30% {
      top: 120px;
    }
    40% {
      top: 160px;
    }
    50% {
      left: 400px;
    }
    60% {
      top: 220px;
    }
    70% {
      top: 300px;
    }
    80% {
      top: 400px;
    }
    90% {
      top: 550px;
    }
    100% {
      left: 800px;
      transform: rotate(270deg);
    }
  }
`;

function Stack(props) {
  return (
    <>
      <h1>Tech Stack</h1>
      <Container>
        <p>React.js</p>
        <p>ES6/ES7</p>
        <p>Javascript</p>
        <p>Redux</p>
        <p>jQuery</p>
        <p>HTML5</p>
        <p>CSS3</p>
        <p>SEO</p>
        <p>Bootstrap</p>
        <p>CSS-in-JS</p>
        <img className={"planetoid"} src={planetoid} alt="uranus" />
        <img className={"uranus"} src={uranus} alt="uranus" />
      </Container>
    </>
  );
}

export default Stack;
