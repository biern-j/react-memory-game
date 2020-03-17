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
import { LevelButtons, GameDifficultyLevel } from "./components/levelButton";

type State = {
  cards: Card[];
  players: Player[];
  gameState: GameState;
  gameDiffculty: GameDifficultyLevel[];
};

const singleColorCards = [
  { color: "red" },
  { color: "green" },
  { color: "blue" },
  { color: "yelow" }
];
type CardsColors = ColorCard[];
type ColorCard = { color: string };

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      players: [],
      cards: [],
      gameState: {
        start: false,
        changedPlayer: true,
        playersResults: []
      },
      gameDiffculty: [
        { levelTitle: "easy", multiple: 2, choosen: false },
        { levelTitle: "middle", multiple: 3, choosen: false },
        { levelTitle: "hard", multiple: 4, choosen: false }
      ]
    };
  }
  setLevelState(chosenLevel: GameDifficultyLevel) {
    this.setState({
      gameDiffculty: this.state.gameDiffculty.map(levelDif =>
        levelDif.levelTitle === chosenLevel.levelTitle
          ? { ...levelDif, choosen: true }
          : levelDif
      )
    });
  }
  handleGameStartState(startGame: boolean) {
    const fistPlayerActive = this.state.players;
    fistPlayerActive[0] = { ...this.state.players[0], active: true };
    const levelDificulty = this.state.gameDiffculty.find(
      level => level.choosen === true
    )!;
    this.setState({
      gameState: {
        ...this.state.gameState,
        start: startGame
      },
      players: !startGame ? [] : fistPlayerActive,
      cards: !startGame
        ? []
        : sortRandomly(
            getDubleCards(
              singleColorCards,
              this.state.players.length,
              levelDificulty.multiple
            )
          )
    });
  }
  onInputSubmit(value: { name: string; surname: string }) {
    this.setState((state, props) => ({
      players: [
        ...state.players,
        { id: state.players.length, ...value, active: false }
      ]
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
      const toggledCards = toggleClickedCard(state);

      const filterDisabledCards = toggledCards.filter(card => card.clicked);

      if (filterDisabledCards.length === 2) {
        if (filterDisabledCards[0].color === filterDisabledCards[1].color) {
          const activePlayer = state.players.find(
            player => player.active === true
          )!;
          console.log("activePlayerResults", activePlayer);

          return {
            cards: setFoundCard(toggledCards, filterDisabledCards),
            gameState: {
              ...state.gameState,
              // gameEnd: setGameEnd(this.state.cards),
              playersResults: addPlayerPoint(
                state.gameState.playersResults,
                activePlayer.id,
                filterDisabledCards[0]
              )
            },
            players: state.players
          };
        } else {
          this.scheduleHideCard();
        }
      }

      return {
        cards: toggledCards,
        gameState: state.gameState,
        players: state.players
      };
    });
  }

  render() {
    console.log("level", this.state.gameDiffculty);

    return (
      <div>
        {!this.state.gameState.start && (
          <div>
            <GameForm onSubmit={value => this.onInputSubmit(value)} />
            <LevelButtons
              levelButtons={this.state.gameDiffculty} // lista z poziomami trudności
              ocClick={level => this.setLevelState(level)}
            />
          </div>
        )}
        <PlayerWelcome players={this.state.players} />
        {this.state.gameState.start && (
          <PlayersTable
            players={this.state.players}
            playersResults={this.state.gameState.playersResults}
          />
        )}
        <GameStateManager
          totalPlayers={this.state.players.length}
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

        {this.state.cards.length !== 0 && setGameEnd(this.state.cards) && (
          <GameSummary
            players={this.state.players}
            playersResults={this.state.gameState.playersResults}
          />
        )}
      </div>
    );
  }
}
// if all maped cards fullfill condition card.found then return true
const setGameEnd = (cards: Card[]) => cards.every(card => card.found);

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
const getDubleCards = (
  singleColorCards: CardsColors,
  totalPlayers: number,
  dificultyLevel: number
) => {
  const selectedCardsByTotalPlayers = singleColorCards.slice(
    0,
    totalPlayers * dificultyLevel
  );
  const setDubleCards = (acc: Card[], curr: ColorCard): Card[] => {
    console.log("accumulated", acc, "cuurent", curr);
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

  return selectedCardsByTotalPlayers.reduce(setDubleCards, []);
};

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("app")
);
