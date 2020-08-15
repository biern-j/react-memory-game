import React from "react";

import { GameStateButton } from "./gameStateManagerStyle";

export type GameState = {
  start: boolean;
  changedPlayer: boolean;
  playersResults: PlayerResults;
};
export type PlayerResults = {
  [key in number]?: PlayerScoreCards;
};

export type PlayerScoreCards = { color: string }[];

type GameStateProps = {
  gameState: GameState;
  onGameStart: (value: boolean) => void;
  totalPlayers: number;
};

export const GameStateManager = ({
  totalPlayers,
  gameState,
  onGameStart,
}: GameStateProps) => {
  const isDisable = totalPlayers === 0;
  return (
    <GameStateButton
      data-cy="start-game"
      disabled={isDisable}
      onClick={() => onGameStart(!gameState.start)}
    >
      {gameState.start ? "Restart" : "Start"}
    </GameStateButton>
  );
};
