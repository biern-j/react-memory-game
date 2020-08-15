import * as React from "react";
import { Cards, Card } from "./cards";
import { PlayersTable } from "./playersTable";
import { State } from "../index";
import { MemoryGameView } from "./memoryGameStyle";
import { GameSummary } from "./gameSummary";

type MemoryGameType = {
  onNewGame: () => void;
  onGameRestart: () => void;
  gameInfo: State;
  onSetToggle: (id: number) => void;
  onSetGameEnd: (cardsState: Card[]) => void;
  onHandleNewGame: () => void;
};

export const MemoryGame = ({
  onNewGame,
  onGameRestart,
  gameInfo,
  onSetToggle,
  onSetGameEnd,
  onHandleNewGame,
}: MemoryGameType) => (
  <MemoryGameView>
    {gameInfo.cards.length !== 0 && onSetGameEnd(gameInfo.cards) ? (
      <GameSummary
        onNewGame={() => onHandleNewGame()}
        players={gameInfo.players}
        playersResults={gameInfo.gameState.playersResults}
      />
    ) : (
      <PlayersTable
        onNewGame={onNewGame}
        onGameRestart={onGameRestart}
        players={gameInfo.players}
        playersResults={gameInfo.gameState.playersResults}
        difficultyLevel={gameInfo.gameDiffculty}
      />
    )}
    <Cards
      totalCard={
        gameInfo.gameDiffculty.find((level) => level.choosen)!.multiple *
        gameInfo.players.length *
        2
      }
      cards={gameInfo.cards}
      onClick={(id: number) => onSetToggle(id)}
    />
  </MemoryGameView>
);
