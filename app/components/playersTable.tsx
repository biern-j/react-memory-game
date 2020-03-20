import React from "react";

import { PlayerResults, PlayerScoreCards } from "./gameStateManager";
import { Player } from "./playerWelcome";
import { GameDifficultyLevel } from "./levelButton";

type PlayersTableProps = {
  players: Player[];
  playersResults: PlayerResults;
  difficultyLevel: GameDifficultyLevel[];
};

export const PlayersTable = ({
  players,
  playersResults,
  difficultyLevel
}: PlayersTableProps) => {
  const activePlayer = players.find(player => player.active === true)!;
  const chosenDifficultyLevel = difficultyLevel.find(level => level.choosen);
  return (
    <div>
      <div>
        Difficulty level:{" "}
        {chosenDifficultyLevel && chosenDifficultyLevel.levelTitle}
      </div>
      <div>Active player: {activePlayer.name}</div>
      <div>
        Players ranking:
        {players.map(player => (
          <div key={player.id}>
            <div>Player name: {player.name}</div>
            <div>
              Player points:
              {getPlayerPoints(playersResults[player.id] || [])}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getPlayerPoints = (playersResults: PlayerScoreCards) =>
  playersResults.map(item => <div key={item.color}>{item.color}</div>);
