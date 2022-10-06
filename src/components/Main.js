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
    </Wrapper>
  );
}

export default Main;
