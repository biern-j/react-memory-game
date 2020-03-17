import React from "react";

import { GameStatePanel } from "./style";

export type GameState = {
  start: boolean;
  changedPlayer: boolean;
  playersResults: PlayerResults;
  endGame: boolean;
};
export type PlayerResults = {
  [key in number]?: PlayerScoreCards;
};

export type PlayerScoreCards = { color: string }[];

// x = {
//   1: [],
//   3: [{}]
// }

type GameStateProps = {
  gameState: GameState;
  onGameStart: (value: boolean) => void;
};

export const GameStateManager = ({
  gameState,
  onGameStart
}: GameStateProps) => {
  return (
    <div>
      <GameStatePanel onClick={() => onGameStart(!gameState.start)}>
        {gameState.start ? "Resetart" : "Start"}
      </GameStatePanel>
    </div>
  );
};
