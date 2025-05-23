import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

const ProgressBar = ({ progressBar, onPauseResume }) => {
  return (
    <div className="progress-row">
      <div className="outer">
        <div className="inner" style={{ width: `${progressBar.progress}%` }}>
          {progressBar.progress}%
        </div>
      </div>
      {progressBar.status !== "completed" && (
        <button
          onClick={() => onPauseResume(progressBar.id)}
          className="control-button"
        >
          {progressBar.status === "paused" ? "Resume" : "Pause"}
        </button>
      )}
      <span className="status-indicator">
        {progressBar.status === "completed"
          ? "✓"
          : progressBar.status === "paused"
          ? "⏸"
          : progressBar.status === "queued"
          ? "⏳"
          : "▶"}
      </span>
    </div>
  );
};

const Practice = () => {
  const [progressBars, setProgressBars] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgressBars((prev) => {
        const updated = prev.map((pb) => {
          if (pb.status === "running") {
            let newProgress = pb.progress + 10;
            if (newProgress >= 100) {
              return {
                ...pb,
                progress: 100,
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

    // Clean up interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleAddProgressBar = () => {
    const newProgressBar = {
      progress: 0,
      id: Date.now(),
      status: "queued",
    };

    setProgressBars((prev) => [...prev, newProgressBar]);
  };

  const handlePauseResume = (id) => {
    setProgressBars((prev) => {
      // First, check if we're trying to resume a paused bar
      const targetBar = prev.find((pb) => pb.id === id);
      const isResuming = targetBar && targetBar.status === "paused";

      // Count currently running bars
      const runningCount = prev.filter((pb) => pb.status === "running").length;

      // If resuming and already at limit, queue instead of running
      if (isResuming && runningCount >= 3) {
        return prev.map((pb) =>
          pb.id === id ? { ...pb, status: "queued" } : pb
        );
      }

      // Otherwise, toggle between pause and running/queued as appropriate
      return prev.map((pb) => {
        if (pb.id === id) {
          if (pb.status === "running") {
            return { ...pb, status: "paused" };
          } else if (pb.status === "paused") {
            // Resume directly if under limit, otherwise queue
            return { ...pb, status: "running" };
          }
        }
        return pb;
      });
    });
  };

  return (
    <div className="progress-container">
      <h2>Progress Bars</h2>
      <button onClick={handleAddProgressBar}>Add progress bar</button>
      <div className="bars-list">
        {progressBars.map((progressBar) => (
          <ProgressBar
            key={progressBar.id}
            progressBar={progressBar}
            onPauseResume={handlePauseResume}
          />
        ))}
      </div>
    </div>
  );
};

export default Practice;
