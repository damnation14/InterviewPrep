import React, { Component } from "react";

// Components
import Component2 from "./components/component2";

export const RandomContext = React.createContext();

class Component1 extends Component {
  sampleCallback() {
    return this;
  }

  render() {
    return (
      <>
        <RandomContext.Provider value="hehe">
          <div>Component 1</div>
          <Component2 sampleCallback={this.sampleCallback} />
        </RandomContext.Provider>
      </>
    );
  }
}

export default Component1;
