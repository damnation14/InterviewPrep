import React, { useContext } from "react";

// Components
import { RandomContext } from "../../Component1";

const Component3 = (props) => {
  const value = useContext(RandomContext);
  return (
    <>
      <div>Component 3: {value}</div>
    </>
  );
};

export default Component3;
