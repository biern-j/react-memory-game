import React from "react";
import { PlayerWelcome } from "./style";

type PlayersProps = {
  players: Player[];
};
export type Player = { id?: number; name: string; surname: string };

export function PlayerWelcome({ players }: PlayersProps) {
  return (
    <PlayerWelcome>
      {players.map(player => (
        <div key={player.id}> Hello: {`${player.name} ${player.surname}`}</div>
      ))}
    </PlayerWelcome>
  );
}
