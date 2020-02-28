import React from "react";
import ReactDOM from "react-dom";
import { HelloWord } from "./components/hello-word";

class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWord />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
