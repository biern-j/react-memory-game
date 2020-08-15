import React from "react";
import ReactDOM from "react-dom";
import { Player } from "./components/playerWelcome/playerWelcome";
import { Card } from "./components/cards/cards";
import {
  GameState,
  PlayerResults,
} from "./components/gameStateManager/gameStateManager";
import { GameForm } from "./components/gameForm/gameForm";
import { GlobalStyle, GameContainer, GameStart } from "./style";
import * as R from "ramda";
import { GameDifficultyLevel } from "./components/levelButton/levelButton";
import { MemoryGame } from "./components/memoryGame/memoryGame";

export type State = {
  cards: Card[];
  players: Player[];
  gameState: GameState;
  gameDifficulty: GameDifficultyLevel[];
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
      },
      gameDifficulty: [
        { levelTitle: "easy", multiple: 2, chosen: true },
        { levelTitle: "medium", multiple: 3, chosen: false },
        { levelTitle: "hard", multiple: 4, chosen: false },
      ],
    };
  }
  setLevelState(chosenLevel: string) {
    this.setState({
      gameDifficulty: this.state.gameDifficulty.map((levelDif) =>
        levelDif.levelTitle === chosenLevel
          ? { ...levelDif, chosen: true }
          : { ...levelDif, chosen: false }
      ),
    });
  }

  async handleGameStartState(startGame: boolean) {
    const fistPlayerActive = this.state.players;
    fistPlayerActive[0] = { ...this.state.players[0], active: true };
    const levelDifficulty = this.state.gameDifficulty.find(
      (level) => level.chosen === true
    )!;
    this.setState({
      gameState: {
        ...this.state.gameState,
        start: startGame,
      },
      players: !startGame ? [] : fistPlayerActive,

      cards: [],
    });

    if (startGame) {
      const doubledCards = await getDoubleCards(
        this.state.players.length,
        levelDifficulty.multiple
      );

      this.setState({
        cards: sortRandomly(doubledCards),
      });
    }
  }
  onInputSubmit(value: { name: string }) {
    this.setState((state, props) => ({
      players: [
        ...state.players,
        { id: state.players.length, ...value, active: false },
      ],
    }));
  }
  scheduleHideCard() {
    setTimeout(
      () =>
        this.setState((state) => {
          const activePlayer = state.players.find(
            (player) => player.active === true
          )!;
          const nextActivePlayer = nextActivePlayerId(
            activePlayer.id,
            state.players
          );

          return {
            cards: this.unlockedClickedCard(state),
            gameState: {
              ...state.gameState,
              changedPlayer: !state.gameState.changedPlayer,
            },
            players: state.players.map((player) => {
              return {
                ...player,
                active: player.id === nextActivePlayer,
              };
            }),
          };
        }),
      1000
    );
  }
  unlockedClickedCard(state: Pick<State, "cards">) {
    return state.cards.map((card) => ({
      ...card,
      clicked: false,
    }));
  }

  setToggle(id: number) {
    const toggleClickedCard = (state: State) =>
      state.cards.map((card) =>
        card.id === id ? { ...card, clicked: !card.clicked } : card
      );
    const setFoundCard = (cards: Card[], disabledCards: Card[]) =>
      cards.map((card: Card) =>
        card.id === disabledCards[0].id || card.id === disabledCards[1].id
          ? { ...card, clicked: !card.clicked, found: true }
          : card
      );

    this.setState((state) => {
      const toggledCards = toggleClickedCard(state);

      const filterDisabledCards = toggledCards.filter((card) => card.clicked);

      if (filterDisabledCards.length === 2) {
        if (filterDisabledCards[0].color === filterDisabledCards[1].color) {
          const activePlayer = state.players.find(
            (player) => player.active === true
          )!;

          return {
            cards: setFoundCard(toggledCards, filterDisabledCards),
            gameState: {
              ...state.gameState,
              playersResults: addPlayerPoint(
                state.gameState.playersResults,
                activePlayer.id,
                filterDisabledCards[0]
              ),
            },
            players: state.players,
          };
        } else {
          this.scheduleHideCard();
        }
      }

      return {
        cards: toggledCards,
        gameState: state.gameState,
        players: state.players,
      };
    });
  }
  handleRemovePlayer(id: number) {
    this.setState({
      players: this.state.players.filter((player) => player.id !== id),
    });
  }

  handleGameRestart() {
    this.setState({
      gameState: {
        ...this.state.gameState,
        start: !this.state.gameState.start,
        playersResults: [],
      },
    });
  }

  handleNewGame() {
    this.setState({
      players: [],
      cards: [],
      gameState: {
        start: false,
        changedPlayer: true,
        playersResults: [],
      },
    });
  }

  render() {
    return (
      <GameContainer gameStart={this.state.gameState.start}>
        {!this.state.gameState.start ? (
          <GameStart>
            <header>
              <h1>memory game</h1>
            </header>
            <GameForm
              gameState={this.state}
              onSubmit={(value: { name: string }) => this.onInputSubmit(value)}
              onLevelSetup={(level: string) => this.setLevelState(level)}
              onHandleGameStart={(gameStart: boolean) =>
                this.handleGameStartState(gameStart)
              }
              onRemovePlayer={(palyerId: number) =>
                this.handleRemovePlayer(palyerId)
              }
            />
          </GameStart>
        ) : (
          <MemoryGame
            onNewGame={() => this.handleNewGame()}
            onGameRestart={() => this.handleGameRestart()}
            gameInfo={this.state}
            onSetToggle={(id) => this.setToggle(id)}
            onSetGameEnd={(cardsState) => setGameEnd(cardsState)}
            onHandleNewGame={() => this.handleNewGame()}
          />
        )}
        <GlobalStyle />
      </GameContainer>
    );
  }
}
// if all mapped cards fulfill condition card.found then return true
const setGameEnd = (cards: Card[]) => cards.every((card) => card.found);

const sortRandomly = (cards: Card[]) => {
  const sortRandomly = R.sortBy((i) => Math.random());
  return sortRandomly(cards);
};

const addPlayerPoint = (
  playerResults: PlayerResults,
  playerId: number,
  card: Card
): PlayerResults => {
  return {
    ...playerResults,
    [playerId]: [...(playerResults[playerId] || []), { color: card.color }],
  };
};
const nextActivePlayerId = (activePlayer: number, players: Player[]) => {
  const nextActivePlayerId = activePlayer + 1;
  return nextActivePlayerId >= players.length
    ? players[0].id
    : nextActivePlayerId;
};
const getDoubleCards = async (
  totalPlayers: number,
  difficultyLevel: number
) => {
  const singlePictures = await Promise.all(
    Array.from(new Array(totalPlayers * difficultyLevel)).map((item, index) =>
      fetchImage(`https://picsum.photos/200/300?random=${index}`)
    )
  );
  const setDoubleCards = (acc: Card[], curr: string): Card[] => {
    const doubleCard = {
      id: acc.length + 1,
      color: curr,
      clicked: false,
      found: false,
    };
    return acc.concat(
      ...[
        {
          id: acc.length,
          color: curr,
          clicked: false,
          found: false,
        },
        doubleCard,
      ]
    );
  };

  return singlePictures.reduce(setDoubleCards, []);
};

const fetchImage = async (url: string) => {
  function arrayBufferToBase64(buffer: ArrayBuffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach((b) => (binary += String.fromCharCode(b)));

    return window.btoa(binary);
  }
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  var base64Flag = "data:image/jpeg;base64,";
  var imageStr = await arrayBufferToBase64(buffer);

  return base64Flag + imageStr;
};

ReactDOM.render(<App />, document.getElementById("app"));
