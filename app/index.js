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
    // this.state.cards[id].disable = !this.state.cards[id].disable;
    // this.setState({ cards: this.state.cards });

    let toggledCards = [];

    for (let i = 0; i < this.state.cards.length; i++) {
      if (this.state.cards[i].id === id) {
        toggledCards.push(this.state.cards[i]);
        if (toggledCards.length === 2) {
          this.setState({
            cards: this.state.cards.map(card =>
              toggledCards.map(toggledCard => {
                if (
                  card.id === toggledCard.id &&
                  toggledCards[0].color === toggledCards[1].color
                ) {
                  console.log("find", card.find);
                  return { ...card, find: !card.find };
                }
                return card;
              })
            )
          });
          // toggledCards.map(x => {
          //   if (toggledCards[0].color === toggledCards[1].color) {
          //     // this.state.cards[x.id].find = !this.state.cards[x.id].find;
          //     this.setState({
          //       cards: this.state.cards.map(card =>
          //         toggledCards.map(toggledCard => {
          //           if (card.id === toggledCard.id && toggledCards[0].color === toggledCards[1].color) {
          //             console.log("find", card.find);
          //             return { ...card, find: !card.find };
          //           }
          //           return card;
          //         })
          //       )
          //     });
          //   }
          //   // this.state.cards[x.id].disable = !this.state.cards[x.id].disable;
          //   // this.setState({ cards: this.state.cards });
          // });
        }
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
