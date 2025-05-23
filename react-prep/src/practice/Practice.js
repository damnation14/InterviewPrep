import React, { useState, useRef, useEffect } from "react";

import "./styles.css";

const ProgressBar = ({ progressBar }) => {
  return (
    <div className="outer">
      <div
        className="inner"
        style={{ width: `${progressBar.progress}%` }}
      ></div>
    </div>
  );
};

const Practice = () => {
  const [progressBars, setProgressBars] = useState([]);
  const [running, setRunning] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setProgressBars((prev) => {
        const updated = prev.map((pb) => {
          if (pb.status === "running") {
            let newProgress = pb.progress + 10;
            if (newProgress === 100) {
              return {
                ...pb,
                progress: newProgress,
                status: "completed",
              };
            }
            return {
              ...pb,
              progress: newProgress,
            };
          }
          return pb;
        });

        let runningCount = updated.filter(
          (pb) => pb.status === "running"
        ).length;

        // Start queued progress bars if less than 3 are running
        const final = updated.map((pb) => {
          if (pb.status === "queued" && runningCount < 3) {
            runningCount++;
            return { ...pb, status: "running" };
          }
          return pb;
        });

        return final;
      });
    }, 1000);
  }, []);

  const handleAddProgressBar = () => {
    const newProgressBar = {
      progress: 0,
      id: Date.now(),
      status: "queued",
    };

    setProgressBars((prev) => [...prev, newProgressBar]);
  };

  return (
    <>
      <button onClick={() => handleAddProgressBar()}>Add progress bar </button>
      {progressBars.map((progressBar) => (
        <ProgressBar progressBar={progressBar} />
      ))}
    </>
  );
};

export default Practice;
