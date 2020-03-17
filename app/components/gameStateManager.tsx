import React from "react";
import { GameStatePanel } from "./style";

export type GameState = {
  start: boolean;
  play: boolean;
  endGame: boolean;
};
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
