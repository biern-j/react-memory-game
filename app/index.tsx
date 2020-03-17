import React from "react";
import ReactDOM from "react-dom";
import { PlayerWelcome, Player } from "./components/playerWelcome";
import { Cards, Card } from "./components/cards";
import {
  GameStateManager,
  GameState,
  PlayerResults
} from "./components/gameStateManager";
import { GameForm } from "./components/gameForm";
import { GlobalStyle } from "./components/style";
import { PlayersTable } from "./components/playersTable";
import * as R from "ramda";
import { GameSummary } from "./components/gameSummary";

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
        changedPlayer: true,
        playersResults: [],
        endGame: false
      }
    };
  }
  handleGameStartState(startGame: boolean) {
    const fistPlayerActive = this.state.players;
    fistPlayerActive[0] = { ...this.state.players[0], active: true };
    this.setState({
      gameState: {
        ...this.state.gameState,
        start: startGame
      },
      players: !startGame ? [] : fistPlayerActive,
      cards: !startGame ? [] : sortRandomly(this.state.cards)
    });
  }
  onInputSubmit(value: { name: string; surname: string }) {
    this.setState((state, props) => ({
      players: [
        ...state.players,
        { id: state.players.length, ...value, active: false }
      ],
      cards: getDubleCards(singleColorCards, state.players.length + 1)
    }));
  }
  scheduleHideCard() {
    setTimeout(
      () =>
        this.setState(state => {
          const activePlayer = state.players.find(
            player => player.active === true
          )!;
          const nextActivePlayer = nextActivePlayerId(
            activePlayer.id,
            state.players
          );

          return {
            cards: this.undisableClickedCard(state),
            gameState: {
              ...state.gameState,
              changedPlayer: !state.gameState.changedPlayer
            },
            players: state.players.map(player => {
              return {
                ...player,
                active: player.id === nextActivePlayer
              };
            })
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
          ? { ...card, clicked: !card.clicked, found: true }
          : card
      );

    this.setState(state => {
      const toggleClickedCards = toggleClickedCard(state);

      const filterDisabledCards = toggleClickedCards.filter(
        card => card.clicked
      );

      if (filterDisabledCards.length === 2) {
        if (filterDisabledCards[0].color === filterDisabledCards[1].color) {
          const activePlayer = state.players.find(
            player => player.active === true
          )!;
          console.log("activePlayerResults", activePlayer);

          return {
            cards: setFoundCard(toggleClickedCards, filterDisabledCards),
            gameState: {
              ...state.gameState,
              playersResults: addPlayerPoint(
                state.gameState.playersResults,
                activePlayer.id,
                filterDisabledCards[0]
              )
            }
          };
        } else {
          this.scheduleHideCard();
        }
      }

      return {
        cards: toggleClickedCards,
        gameState: state.gameState
      };
    });
  }

  render() {
    console.log(
      "his.state.gameState",
      this.state.players,
      "this.state.gameState.playersResults",
      this.state.gameState.playersResults,
      "results",
      Object.values(this.state.gameState.playersResults)
    );

    return (
      <div>
        {!this.state.gameState.start && (
          <GameForm onSubmit={value => this.onInputSubmit(value)} />
        )}
        <PlayerWelcome players={this.state.players} />
        {this.state.gameState.start && (
          <PlayersTable
            players={this.state.players}
            playersResults={this.state.gameState.playersResults}
          />
        )}
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
        <GameSummary
          players={this.state.players}
          playersResults={this.state.gameState.playersResults}
        />
        {/* {this.state.gameState.endGame && (
          <GameSummary/>
        )} */}
      </div>
    );
  }
}

const sortRandomly = (cards: Card[]) => {
  const sortRandomly = R.sortBy(i => Math.random());
  return sortRandomly(cards);
};

const addPlayerPoint = (
  playerResults: PlayerResults,
  playerId: number,
  card: Card
): PlayerResults => {
  return {
    ...playerResults,
    [playerId]: [...(playerResults[playerId] || []), { color: card.color }]
  };
};
const nextActivePlayerId = (activePlayer: number, players: Player[]) => {
  const nextActivePlayerId = activePlayer + 1;
  return nextActivePlayerId >= players.length
    ? players[0].id
    : nextActivePlayerId;
};

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("app")
);
