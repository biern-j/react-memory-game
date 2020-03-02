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
        { id: 0, color: "red", disable: false, find: false },
        { id: 1, color: "red", disable: false, find: false },
        { id: 2, color: "blue", disable: false, find: false },
        { id: 3, color: "blue", disable: false, find: false }
      ]
    };
  }

  setToggle(id) {
    this.state.cards[id].disable = !this.state.cards[id].disable;
    this.setState({ cards: this.state.cards });

    let disabledCards =[]

    for (let i=0; i < this.state.cards.length; i++) {
      if (this.state.cards[i].disable === true){
        disabledCards.push(this.state.cards[i]);
        if (disabledCards.length === 2){
          disabledCards.map(x => {
            if(disabledCards[0].color === disabledCards[1].color){
              this.state.cards[x.id].find = !this.state.cards[x.id].find;
              this.setState({ cards: this.state.cards });
            }
            this.state.cards[x.id].disable = !this.state.cards[x.id].disable;
            this.setState({ cards: this.state.cards });
          }) 
        }
        console.log ("disabled Cards", disabledCards, "disabledCards[0].color", disabledCards[0].color);
      }
    }
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
