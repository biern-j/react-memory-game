import React from "react";
import { PlayerResults } from "./gameStateManager";
import { Player } from "./playerWelcome";
import { GameSummaryPopup, GameSummaryInfo } from "./gameSummaryStyle";
import { NewGameButton } from "./playersTableStyle";
import * as R from "ramda";

type GameSummaryProps = {
  onNewGame: () => void;
  players: Player[];
  playersResults: PlayerResults;
};

export const GameSummary = ({
  onNewGame,
  players,
  playersResults,
}: GameSummaryProps) => {
  const entries = Object.entries(playersResults);
  const playersPoints = entries.map((playerResult) => ({
    playerId: Number(playerResult[0]),
    playerPoints: (playerResult[1] || []).length,
  }));

  const sortByPlayersPoints = R.sortBy((i) => -i.playerPoints);
  const sortedPlayers = sortByPlayersPoints(playersPoints);
  const winnerScore = R.head(sortedPlayers);

  return (
    <GameSummaryPopup>
      <GameSummaryInfo>
        <h1>Game winner:</h1>
        <h2>
          {winnerScore === undefined
            ? "No winner"
            : players[winnerScore.playerId].name}
        </h2>
        <NewGameButton onClick={() => onNewGame()}>New game</NewGameButton>
      </GameSummaryInfo>
    </GameSummaryPopup>
  );
};
