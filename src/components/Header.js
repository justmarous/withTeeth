import React from "react";
import linkedin from "../img/linkedin.svg";
import github from "../img/github.png";
import styled from "styled-components";

const Section = styled.section`
  position: fixed;
  background-color: #141827;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75px;
  z-index: 4;

  img {
    width: 22px;
    height: auto;
    padding-right: 20px;
  }
  div {
    display: flex;
    flex-direction: row;
    padding-left: 40px;
  }

  h1 {
    //menu icon
    margin: 0;
    padding-right: 40px;
    display: inline-block;
    width: 100px;
    font-size: 20px;
    text-align: right;
  }
`;

function Header() {
  return (
    <Section>
      <div>
        <img alt={"git"} src={github} />
        <img alt={"linkedin"} src={linkedin} />
      </div>
      <h1>|||</h1>
    </Section>
  );
}

export default Header;
