import React from "react";
import happy_cattle_dog from "../happy_cattle_dog.jpg";

const SuccessMessage = ({ resetGame }) => {
  return (
    <div className="success-container">
      <div className="success-image">
        <img src={happy_cattle_dog} alt="Happy dog" width="100%" />
      </div>
      <h2>That's right!</h2>
      <button className="play-again-button" onClick={resetGame}>
        Play Again
      </button>
    </div>
  );
};

export default SuccessMessage;
