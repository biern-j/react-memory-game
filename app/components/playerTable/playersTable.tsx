import React from "react";

import {
  PlayerResults,
  PlayerScoreCards,
} from "../gameStateManager/gameStateManager";
import { Player } from "../playerWelcome/playerWelcome";
import { GameDifficultyLevel } from "../levelButton/levelButton";
import {
  PlayerTableContainer,
  PlayerName,
  PlayerPoint,
  PlayerRankingBox,
  RankingCel,
  RestartButton,
  NewGameButton,
} from "./playersTableStyle";

type PlayersTableProps = {
  onNewGame: () => void;
  onGameRestart: () => void;
  players: Player[];
  playersResults: PlayerResults;
  difficultyLevel: GameDifficultyLevel[];
};

export const PlayersTable = ({
  onNewGame,
  onGameRestart,
  players,
  playersResults,
  difficultyLevel,
}: PlayersTableProps) => {
  const activePlayer = players.find((player) => player.active === true)!;
  const chosenDifficultyLevel = difficultyLevel.find((level) => level.chosen);
  return (
    <PlayerTableContainer>
      <PlayerRankingBox>
        {players.map((player) => (
          <RankingCel>
            <PlayerName
              key={player.id}
              activePlayer={activePlayer.name === player.name}
            >
              {player.name}
            </PlayerName>
            <PlayerPoint>
              {getPlayerPoints(playersResults[player.id] || [])}
            </PlayerPoint>
          </RankingCel>
        ))}
        <RankingCel>
          <RestartButton onClick={() => onGameRestart()}>
            Restart game
          </RestartButton>
          <NewGameButton onClick={() => onNewGame()}>New game</NewGameButton>
        </RankingCel>
      </PlayerRankingBox>
    </PlayerTableContainer>
  );
};

const getPlayerPoints = (playersResults: PlayerScoreCards) =>
  playersResults.length;
