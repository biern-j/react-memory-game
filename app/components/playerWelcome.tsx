import React from "react";
import { HelloDiv } from "./style"

type PlayersProps = {
  players: Player[];
};
export type Player = { id?: number; name: string; surname: string };

export function PlayerWelcome({ players }: PlayersProps) {
  return (
      <HelloDiv>
        {players.map(player => (
          <div key={player.id}> Hello: {`${player.name} ${player.surname}`}</div>
        ))}
      </HelloDiv>
  );
}
