import React from "react";

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
      <button onClick={() => onGameStart(!gameState.start)}>
        {gameState.start ? "resetart" : "start"}
      </button>
    </div>
  );
};
