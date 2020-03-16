import React from "react";

import { PlayerResults } from "./gameStateManager";
import { Player } from "./playerWelcome";

type PlayersTableProps = {
  players: Player[];
  playersResults: PlayerResults;
};

export const PlayersTable = ({
  players,
  playersResults
}: PlayersTableProps) => {
  const activePlayer = players.find(player => player.active === true);
  return (
    <div>
      <div>Active player: {activePlayer!.name}</div>
      <div>
        Players ranking:
        {players.map(player => (
          <div key={player.id}>
            <div>Player name: {player.name}</div>
            <div>
              Player points:
              {getPlayerPoints(player.id!, playersResults)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getPlayerPoints = (playerId: number, playersResults: PlayerResults) =>
  Object.values(playersResults).map(result =>
    result === undefined
      ? result
      : result.map(item =>
          item.playerId === playerId ? (
            <div key={item.color}>{item.color}</div>
          ) : (
            ""
          )
        )
  );
