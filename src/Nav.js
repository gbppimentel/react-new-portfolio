import React, { useEffect, useState } from "react";

import "./assets/css/nav.css";
import logoImage from "./assets/img/logo.png";
import Menu from "./Menu";

const Nav = () => {
  return (
    <nav className="nav-container">
      <img src={logoImage} alt="Logo" className="nav-logo" />
      <Menu />
    </nav>
  );
};

export default Nav;
