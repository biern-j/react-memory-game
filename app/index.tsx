import React from "react";
import ReactDOM from "react-dom";
import { PlayerWelcome, Player } from "./components/playerWelcome";
import { Cards, Card } from "./components/cards";
import { sumMatrix } from "./helloTS";
import { GameStateManager, GameState } from "./components/gameStateManager";
import { GameForm } from "./components/gameForm";
import { GlobalStyle } from "./components/style";

type State = {
  cards: Card[];
  players: Player[];
  gameState: GameState;
};
const singleColorCards = [
  { color: "red" },
  { color: "green" },
  { color: "blue" },
  { color: "yelow" }
];
type CardsColors = ColorCard[];
type ColorCard = { color: string };

const getDubleCards = (
  singleColorCards: CardsColors,
  playersAmount: number
) => {
  const matchedCardByPlayersAmount = singleColorCards.slice(0, playersAmount);
  const setDubleCards = (acc: Card[], curr: ColorCard): Card[] => {
    const dubleCard = {
      id: acc.length + 1,
      color: curr.color,
      clicked: false,
      found: false
    };
    return acc.concat(
      ...[
        { id: acc.length, color: curr.color, clicked: false, found: false },
        dubleCard
      ]
    );
  };

  return matchedCardByPlayersAmount.reduce(setDubleCards, []);
};

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      players: [],
      cards: [],
      gameState: {
        start: false,
        play: true,
        endGame: false
      }
    };
  }
  handleGameStartState(startGame: boolean) {
    this.setState({
      gameState: {
        ...this.state.gameState,
        start: startGame
      },
      players: !startGame ? [] : this.state.players,
      cards: !startGame ? [] : this.state.cards
    });
  }
  onInputSubmit(value: Player) {
    this.setState((state, props) => ({
      players: [...state.players, { id: state.players.length + 1, ...value }],
      cards: getDubleCards(singleColorCards, state.players.length + 1)
    }));
  }
  scheduleHideCard() {
    setTimeout(
      () =>
        this.setState(state => {
          return {
            cards: this.undisableClickedCard(state),
            gameState: {
              ...state.gameState,
              play: !state.gameState.play
            }
          };
        }),
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
    console.log("his.state.gameState", this.state.gameState);

    return (
      <div>
        {!this.state.gameState.start && (
          <GameForm onSubmit={(value: Player) => this.onInputSubmit(value)} />
        )}
        <PlayerWelcome players={this.state.players} />
        <GameStateManager
          gameState={this.state.gameState}
          onGameStart={(gameStart: boolean) =>
            this.handleGameStartState(gameStart)
          }
        />
        {this.state.gameState.start && (
          <Cards
            cards={this.state.cards}
            onClick={(id: number) => this.setToggle(id)}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(<><GlobalStyle/><App /></>, document.getElementById("app"));
