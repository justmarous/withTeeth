import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import About from "./About";
import Stack from "./Stack";
import Contact from "./Contact";
import { ThemeProvider } from "styled-components";

const theme = {};

function Main(props) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <About />
      <Portfolio />
      <Stack />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default Main;
