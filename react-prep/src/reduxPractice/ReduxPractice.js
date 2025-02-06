import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { increment, decrement } from "./reduxPractice.actions";
const ReduxPractice = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default ReduxPractice;
