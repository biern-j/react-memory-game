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
        { id: 0, color: "red", clicked: false, found: false },
        { id: 1, color: "red", clicked: false, found: false },
        { id: 2, color: "blue", clicked: false, found: false },
        { id: 3, color: "blue", clicked: false, found: false }
      ]
    };
  }
  scheduleHideCard() {
    setTimeout(
      () =>
        this.setState(state => ({
          cards: this.undisableClickedCard(state)
        })),
      1000
    );
  }

  undisableClickedCard(state) {
    return state.cards.map(card => ({
      ...card,
      clicked: false
    }));
  }

  setToggle(id) {
    const toggleClickedCard = state =>
      state.cards.map(card =>
        card.id === id ? { ...card, clicked: !card.clicked } : card
      );
    const setFoundCard = (cards, disabledCards) =>
      cards.map(card =>
        card.id === disabledCards[0].id || card.id === disabledCards[1].id
          ? { ...card, clicked: card.clicked, found: true }
          : card
      );

    this.setState(state => {
      const toggleClickedCards = toggleClickedCard(state);
      const filterDisabledCards = toggleClickedCards.filter(
        card => card.clicked
      );

      if (filterDisabledCards.length === 2) {
        if (filterDisabledCards[0].color === filterDisabledCards[1].color) {
          return {
            cards: setFoundCard(toggleClickedCards, filterDisabledCards)
          };
        } else {
          this.scheduleHideCard();
        }
      }

      return {
        cards: toggleClickedCards
      };
    });
  }

  render() {
    return (
      <div>
        <HelloWord names={this.state.names} />
        <Cards cards={this.state.cards} onClick={id => this.setToggle(id)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
