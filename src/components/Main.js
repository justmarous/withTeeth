import React from "react";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import styled from "styled-components";
import Fonts from "../fonts/fonts";
import Stack from "./Stack";

const Wrapper = styled.section`
  background-color: #1c2131;
  color: #7399bb;
  text-align: center;
  width: 100vw;
  overflow: hidden;
  z-index: -10;

  & h1 {
    font-family: "Press Start 2P", sans-serif;
    width: 266px;
    margin: 40px auto;
    color: #00fff0;
  }

  & p,
  li {
    font-family: "Armata", sans-serif;
    width: 266px;
    margin: auto;
  }

  .circle {
    height: 1400px;
    width: 1400px;
    border-radius: 50%;
    position: absolute;
    transform: translate(-35%);
    top: 50px;
    background-color: #21293a;
    opacity: 66%;
    z-index: -1;
  }
  .circle2 {
    height: 500px;
    width: 500px;
    border-radius: 50%;
    z-index: -8;
    position: absolute;
    background-color: #273147;
    top: 350px;
    right: 150px;
  }
`;

function Main() {
  return (
    <Wrapper>
      <Fonts />
      <Header />
      <About />
      <Stack />
      <Portfolio />
      <Contact />
      <Footer />
      <div className={"circle2"} />
      <div className={"circle"} />
    </Wrapper>
  );
}

export default Main;
