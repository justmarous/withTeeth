import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  > :first-child {
    border-top: 1px solid #27484a;
  }
  p {
    padding: 20px;
    border-bottom: 1px solid #27484a;
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
      </Container>
    </>
  );
}

export default Stack;
