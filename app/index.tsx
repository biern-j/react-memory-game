import React from "react";
import ReactDOM from "react-dom";
import { PlayerWelcome, Player } from "./components/playerWelcome";
import { Cards, Card } from "./components/cards";
import { sumMatrix } from "./helloTS";
import { GameForm } from "./components/gameForm";

type State = {
  cards: Card[];
  players?: Player[];
};
const singleColorCards = [
  { color: "red", clicked: false, found: false },
  { color: "green", clicked: false, found: false },
  { color: "blue", clicked: false, found: false },
  { color: "yelow", clicked: false, found: false }
];

const getDubleCards = (singleColorCards: Card[], playersAmount: number) => {
  console.log("playersAmount", playersAmount);
  const matchedCardByPlayersAmount = singleColorCards.slice(0, playersAmount);
  const setDubleCards = (acc: Card[], curr: Card): Card[] => {
    const dubleCard = {
      id: acc.length + 1,
      color: curr.color,
      clicked: curr.clicked,
      found: curr.found
    };
    return acc.concat(...[{ id: acc.length, ...curr }, dubleCard]);
  };
  return matchedCardByPlayersAmount.reduce(setDubleCards, []);
};

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cards: [
        { id: 0, color: "red", clicked: false, found: false },
        { id: 1, color: "red", clicked: false, found: false },
        { id: 2, color: "blue", clicked: false, found: false },
        { id: 3, color: "blue", clicked: false, found: false }
      ]
    };
  }
  onInputSubmit(value: Player) {
    this.setState((state, props) => ({
      players:
        state.players === undefined ? [value] : [...state.players, value],
      cards:
        state.players === undefined
          ? getDubleCards(singleColorCards, 1)
          : getDubleCards(singleColorCards, [...state.players, value].length)
    }));
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
  undisableClickedCard(state: Pick<State, "cards">) {
    return state.cards.map(card => ({
      ...card,
      clicked: false
    }));
  }

  setToggle(id: number) {
    const toggleClickedCard = (state: State) =>
      state.cards.map(card =>
        card.id === id ? { ...card, clicked: !card.clicked } : card
      );
    const setFoundCard = (cards: Card[], disabledCards: Card[]) =>
      cards.map((card: Card) =>
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
    const matrix = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4]
    ];
    console.log(
      "render player length",
      this.state.players === undefined
        ? "wait for first player"
        : this.state.players.length
    );

    return (
      <div>
        <GameForm onSubmit={(value: Player) => this.onInputSubmit(value)} />
        <PlayerWelcome players={this.state.players} />
        <Cards
          cards={this.state.cards}
          onClick={(id: number) => this.setToggle(id)}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
