import React from "react";

// Components
import Component3 from "../component3";

const Component2 = (props) => {
  const { sampleCallback } = props;

  const values = sampleCallback();
  return (
    <>
      <div>Component 2</div>
      <Component3 />
    </>
  );
};

export default Component2;
