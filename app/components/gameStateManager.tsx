import React from "react";
import { GameStatePanel } from "./style";

export type GameState = {
  start: boolean;
  play?: { playerId: number; playerMoves: CardId[] };
  endGame: boolean;
};
type CardId = number;
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
