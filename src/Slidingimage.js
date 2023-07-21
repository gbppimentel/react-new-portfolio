import React, { useState, useEffect } from "react";
import "./assets/css/SlidingImage.css";
import landing1 from "./assets/img/landing-1.png";

const SlidingImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`sliding-image ${isVisible ? "visible" : ""}`}>
      <img className="slide1" src={landing1} alt="Sliding Image" />
    </div>
  );
};

export default SlidingImage;
