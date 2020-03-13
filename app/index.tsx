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
type singleCards = singleCard[];
type singleCard = {
  id?: number;
  color: string;
  clicked: boolean;
  found: boolean;
};

const singleColorCards = [
  { color: "red", clicked: false, found: false },
  { color: "green", clicked: false, found: false },
  { color: "blue", clicked: false, found: false },
  { color: "yelow", clicked: false, found: false }
];

const getDubleCards = (
  singleColorCards: singleCards,
  playersAmount: number
) => {
  const matchedCardByPlayersAmount = singleColorCards.slice(0, playersAmount);
  const cardsIndex: number[] = Array(matchedCardByPlayersAmount.length * 2);
  const setDubleCards = (acc: singleCards, curr: singleCard) => {
    const dubleCard = {
      color: curr.color,
      clicked: curr.clicked,
      found: curr.found
    };
    return acc.concat(...[curr, dubleCard]);
  };
  const dubleCards = matchedCardByPlayersAmount.reduce(setDubleCards, []);
  console.log("cardsIndex", cardsIndex, "dubleCards", dubleCards);
  return cardsIndex.map(cardIndex =>
    dubleCards.map(card => ({ id: cardIndex, ...card }))
  );
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
      players: state.players === undefined ? [value] : [...state.players, value]
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
    console.log("test", sumMatrix(matrix));
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
