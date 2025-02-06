import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";

const ReactLifeCycle = (props) => {
  // State to count renders using useState
  const [renderCount, setRenderCount] = useState(0);
  const [input, setInput] = useState("");

  // Ref to count renders using useRef
  const renderCountRef = useRef(0);

  // Increment render count using useEffect
  useEffect(() => {
    renderCountRef.current += 1;
    // setRenderCount(renderCount + 1);
  },);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h2>Render Count using useRef: {renderCountRef.current}</h2>
      <button onClick={() => renderCount(renderCount + 1)}>
        Render using useState
      </button>
      <button onClick={() => renderCountRef.current++}>
        Render using useRef
      </button>
      <input value={input} onChange={handleInputChange}></input>
    </div>
  );
};

export default ReactLifeCycle;
