import React, { useState, useEffect } from "react";

const TestWorker = () => {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(null);
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    const newWorker = new Worker(new URL("./worker.js", import.meta.url));
    setWorker(newWorker);

    newWorker.onmessage = (e) => {
      setSum(e.data); // Update state when worker finishes
    };

    return () => newWorker.terminate(); // Cleanup worker on unmount
  }, []);

  const handleHeavyComputation = () => {
    if (worker) {
      setSum("Calculating..."); // Show loading state
      worker.postMessage("start"); // Trigger worker
    }
  };

  return (
    <div>
      <h1>Web Worker Example (Non-Blocking UI)</h1>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
      <button onClick={handleHeavyComputation}>Run Heavy Computation</button>
      <p>Result: {sum !== null ? sum : "Click the button to compute"}</p>
    </div>
  );
};

export default TestWorker;
