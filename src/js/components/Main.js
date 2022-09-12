import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import About from "./About";
import Stack from "./Stack";
import Contact from "./Contact";

function Main(props) {
    return (
       <>
          <Header/>
           <About/>
            <Portfolio/>
           <Stack/>
           <Contact/>
         <Footer/>
           </>
    );
}

export default Main;