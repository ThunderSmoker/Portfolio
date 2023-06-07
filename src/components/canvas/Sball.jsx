import React, { useState, useEffect } from "react";
import "./Sball.css"; // Import CSS file for styling

const Sball = ({ imgUrl, color = "#fff8eb", angle , offset }) => {
  const [yPosition, setYPosition] = useState(0);
  const [isUp, setIsUp] = useState(true);
  useEffect(() => {
    const animationFrame = requestAnimationFrame(updatePosition);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const updatePosition = (time) => {
    const newYPosition = Math.sin(time /400 + offset) * 0.3; // Adjust the speed and magnitude of the float effect
    setYPosition(newYPosition);
    if (newYPosition >= 0 && !isUp) {
        setIsUp(true);
      } else if (newYPosition < 0 && isUp) {
        setIsUp(false);
      }
    requestAnimationFrame(updatePosition);
  };

  const ballStyle = {
    backgroundColor: color,
    transform: `translateY(${yPosition}rem)`,
  };

  return (
    <div className={`ball-container ${isUp ? "up" : "down"}`}>
      <div className="ball w-10 h-10" style={ballStyle} >
        {imgUrl && <img src={imgUrl} alt="Decal" className="decal" />}
      </div>
    </div>
  );
};

export default Sball;
