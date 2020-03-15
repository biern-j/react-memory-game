import React from "react";
<<<<<<< HEAD
import { GameStatePanel } from "./style";
=======
import { Player } from "./playerWelcome";
>>>>>>> Set player results

export type GameState = {
  start: boolean;
  changedPlayer: boolean;
  playersResults: PlayerResults;
  endGame: boolean;
};
export type PlayerResults = {
  [key in number]: { color: string }[] | undefined;
};

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
