import React from "react";
import ReactDOM from "react-dom";
import { HelloWord } from "./components/hello-word";
import { Cards } from "./components/cards";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["Jola", "Ania"],
      cards: [
        { id: 0, color: "red", disable: false },
        { id: 1, color: "red", disable: false },
        { id: 2, color: "blue", disable: false },
        { id: 3, color: "blue", disable: false }
      ]
    };
  }

  setToggle(id) {
    this.state.cards[id].disable = !this.state.cards[id].disable;
    this.setState({ cards: this.state.cards });
  }

  render() {
    console.log("names", this.state.cards);
    return (
      <div>
        <HelloWord color={"blue"} names={this.state.names} />
        <Cards
          cards={this.state.cards}
          getIdOnClick={id => this.setToggle(id)}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
