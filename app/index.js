import React from "react";
import ReactDOM from "react-dom";
import { HelloWord } from "./components/hello-word";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ["Jola", "Ania"];
  }
  
  render() {
    console.log("names", this.state )
    return (
      <div>
        <HelloWord color={"blue"} names={this.state} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
