import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";

function Header() {
  return (
    <>
      <img alt={"git"} src={github} />
      <img alt={"linkedin"} src={linkedin} />
      <FontAwesomeIcon icon={faBars} />
    </>
  );
}

export default Header;
