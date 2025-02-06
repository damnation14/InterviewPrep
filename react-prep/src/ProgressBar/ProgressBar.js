import React, { useState, useEffect, useCallback } from "react";
import "./styles.css";

const ProgressBar = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (percent < 100) {
        setPercent((prevProgress) => prevProgress + 10);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [percent]);

  const style = { width: `${percent}%` };

  return (
    <>
      <h1>Progress bar </h1>
      <div className="progressBarContainer">
        <div className="progressBar" style={style}>
          {percent}
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
