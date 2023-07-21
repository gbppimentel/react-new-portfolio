import React, { useEffect, useState } from "react";

import "./assets/css/nav.css";
import logoImage from "./assets/img/logo.png";

const Nav = () => {
  return (
    <nav className="nav-container">
      <img src={logoImage} alt="Logo" className="nav-logo" />
    </nav>
  );
};

export default Nav;
