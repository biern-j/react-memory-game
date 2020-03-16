import React from "react";
import { ReStartButton } from "./style"

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
      <ReStartButton onClick={() => onGameStart(!gameState.start)}>
        {gameState.start ? "Resetart" : "Start"}
      </ReStartButton>
    </div>
  );
};
