import React, { useState } from "react";
import Button from "@mui/material/Button";

// HOC
import withLoader from "../reactHoc";

const ReactLifeCycle = (props) => {
  const [counter, setCounter] = useState(0);

  const handleIncrementCounter = (e) => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrementCounter = (e) => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const { isLoading } = props;

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <div>{counter}</div>
      <Button variant="contained" onClick={handleIncrementCounter}>
        Increment
      </Button>
      <Button variant="contained" onClick={handleDecrementCounter}>
        Decrement
      </Button>
    </>
  );
};

export default withLoader(ReactLifeCycle);
