import React, { useState, useEffect, useRef } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Start progress logic
  useEffect(() => {
    if (!isPaused && progress < 100) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(intervalRef.current);
            return 100;
          }
          return prev + 10;
        });
      }, 1000); // speed: update every 100ms
    }

    // Clean up interval
  }, [isPaused]);

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <div
        style={{
          height: "30px",
          width: "100%",
          backgroundColor: "#eee",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#4caf50",
            transition: "width 0.1s ease-in-out",
          }}
        />
      </div>
      <div>
        <button onClick={handlePause} disabled={isPaused}>
          Pause
        </button>
        <button onClick={handleResume} disabled={!isPaused}>
          Resume
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
