import React, { useState } from "react";
import "./assets/css/HamburgerMenu.css"; // Create a separate CSS file for the component

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="nav-icon3" className={isOpen ? "open" : ""} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerMenu;
