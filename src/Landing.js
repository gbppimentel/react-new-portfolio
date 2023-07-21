import React from "react";
import "./assets/css/Landing.css"; // Create a CSS file to style the Landing component if necessary

import SlideText from "./Slidetext";
import SlidingImage from "./Slidingimage";

const Landing = () => {
  return (
    <div className="landing-container">
      <SlidingImage />
      <SlideText />
    </div>
  );
};

export default Landing;
