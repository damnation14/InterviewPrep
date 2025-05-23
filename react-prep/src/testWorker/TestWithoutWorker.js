import React, { useState } from "react";

const TestWithoutWorker = () => {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(null);

  const handleHeavyComputation = () => {
    let result = 0;
    for (let i = 0; i < 1e9; i++) {
      // Loops 1 billion times!
      result += i;
    }
    setSum(result);
  };

  return (
    <div>
      <h1>UI Blocking Example</h1>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
      <button onClick={handleHeavyComputation}>Run Heavy Computation</button>
      <p>Result: {sum !== null ? sum : "Click the button to compute"}</p>
    </div>
  );
};

export default TestWithoutWorker;
