import React, { useRef, useState } from "react";
import "./hoverHandler.css";

const FractionalFillBox = () => {
  const boxRef = useRef();
  const [fillPercent, setFillPercent] = useState(0);
  const [lockedPercent, setLockedPercent] = useState(null);

  const handleMouseMove = (e) => {
    const { left, width } = boxRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    // const percent = Math.min(100, Math.max(0, (x / width) * 100));
    const percent = (x / width) * 100;

    setFillPercent(percent);
  };

  const handleMouseLeave = () => {
    setFillPercent(lockedPercent ?? 0);
  };

  const handleClick = () => {
    setLockedPercent(fillPercent);
  };

  return (
    <div className="box-container">
      <div
        className="fill-box"
        ref={boxRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="fill" style={{ width: `${fillPercent}%` }} />
      </div>
      <p>{fillPercent.toFixed(2)}%</p>
    </div>
  );
};

export default FractionalFillBox;
