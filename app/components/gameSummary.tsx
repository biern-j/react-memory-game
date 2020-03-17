import React from "react";
import { PlayerResults } from "./gameStateManager";
import { Player } from "./playerWelcome";
import * as R from "ramda";

type GameSummaryProps = {
  players: Player[];
  playersResults: PlayerResults;
};

export const GameSummary = ({ players, playersResults }: GameSummaryProps) => {
  const entries = Object.entries(playersResults);
  const playersPoints = entries.map(playerResult => ({
    playerId: Number(playerResult[0]),
    playerPoints: (playerResult[1] || []).length
  }));

  const sortByPlayersPoints = R.sortBy(i => -i.playerPoints);
  const sortedPlayers = sortByPlayersPoints(playersPoints);
  const winner = R.head(sortedPlayers);

  return (
    <div>
      Game winner point:{" "}
      {winner === undefined ? "No winner" : players[winner.playerId]}
    </div>
  );
};

// {players[winnerPlayerId] || "No winner"}
