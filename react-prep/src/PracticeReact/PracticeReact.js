import React from "react";

class PracticeReact extends React.Component {
  // Defining a static property
  defaultTitle = "Default Title";

  // Defining a static method
  showAlert() {
    alert("This is a static method!");
  }

  render() {
    return (
      <div>
        <h1>{this.defaultTitle}</h1>
        <button onClick={this.showAlert}>Click Me</button>
      </div>
    );
  }
}

export default PracticeReact;
