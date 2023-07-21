import React from "react";
import "./assets/css/SlideText.css"; // Import the CSS file with the necessary styles

const SlideText = () => {
  const text = "Hi, I'm Glenn.  ";

  return (
    <h1 className="slide-text">
      {text.split("").map((letter, index) => (
        <span key={index} className="st_c_c">
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default SlideText;
