import React, { useState } from "react";
import "./assets/css/Menu.css"; // Make sure to put your CSS in this file

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavIconClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div
      id="nav-icon3"
      className={isOpen ? "open" : ""}
      onClick={handleNavIconClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Menu;
