import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";

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