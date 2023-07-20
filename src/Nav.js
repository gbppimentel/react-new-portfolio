import React, { useState } from "react";

import "./assets/css/nav.css";
import logoImage from "./assets/img/logo.png";
import HamburgerMenu from "./Burger";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="nav-container">
      <img src={logoImage} alt="Logo" className="nav-logo" />
      <HamburgerMenu />
    </nav>
  );
};

export default Nav;
