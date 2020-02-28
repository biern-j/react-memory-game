import React from "react";
import ReactDOM from "react-dom";
import { HelloWord } from "./components/hello-word";
import { Cards } from "./components/cards";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {names:["Jola", "Ania"], 
    cards: [{id: 0, color: "red"},{id: 1, color: "red"},{id: 2, color: "blue"},{id: 3, color: "blue"}]}
  }
  
  render() {
    console.log("names", this.state )
    return (
      <div>
        <HelloWord color={"blue"} names={this.state.names} />
        <Cards number={1} cards={this.state.cards}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
