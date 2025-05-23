import { useState } from "react";

import "./style.css";

const StackableToaster = () => {
  const [toasters, setToasters] = useState(0);

  const handleToaster = () => {
    setToasters((prev) => prev + 1);
    setTimeout(() => {
      setToasters((prev) => prev - 1);
    }, 2000);
  };

  return (
    <div className="container">
      <button onClick={() => handleToaster()}>Add toaster</button>
      <div className="toasters">
        {Array(toasters)
          .fill(1)
          .map((_, i) => (
            <div className="toaster">{`Toaster ${i}`}</div>
          ))}
      </div>
    </div>
  );
};

export default StackableToaster;
