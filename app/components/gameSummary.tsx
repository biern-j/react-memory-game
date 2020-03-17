import React from "react";
import { PlayerResults, PlayerScoreCards } from "./gameStateManager";

type GameSummaryProps = {
  winnerPlayer: PlayerResults;
};

export const GameSummary = ({ winnerPlayer }: GameSummaryProps) => {
  const getWinner = (acc: number, curr: PlayerScoreCards): number =>
    (curr || []).length > acc ? curr.length : acc;

  const winner =
    winnerPlayer === undefined
      ? "no jeest"
      : Object.values(winnerPlayer).reduce(getWinner, 0);
  return <div>Game winner point: {winner}</div>;
};
