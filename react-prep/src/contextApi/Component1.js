import React from "react";

// Components
import Component2 from "./components/component2";

export const RandomContext = React.createContext();

const Component1 = (props) => {
  return (
    <>
      <RandomContext.Provider value="hehe">
        <div>Component 1</div>
        <Component2 />
      </RandomContext.Provider>
    </>
  );
};

export default Component1;
