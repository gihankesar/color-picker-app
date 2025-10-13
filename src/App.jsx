import React, { useState, useEffect } from "react";
import "./WindowWidthTracker.css"; 

function WindowWidthTracker() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="tracker-container">
      <div className="tracker-card">
        <h1>📏 Window Dimensions</h1>
        <p>
          <strong>Width:</strong> {width}px
        </p>
        <p>
          <strong>Height:</strong> {height}px
        </p>
      </div>
    </div>
  );
}

export default WindowWidthTracker;
