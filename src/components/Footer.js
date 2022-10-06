import React from "react";
import styled from "styled-components";

export const Container = styled.footer`
  & p {
    width: 266px;
    margin: auto;
    font-size: 12px;
    font-weight: 200;
  }
`;

function Footer(props) {
  return (
    <Container>
      <p>&copy; Developed by Marek Bilnicki</p>
      <p> Designed by Liza Aleksandrovych</p>
    </Container>
  );
}

export default Footer;
