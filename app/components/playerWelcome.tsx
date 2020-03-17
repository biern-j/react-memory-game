import React from "react";
import { Welcome } from "./style";

type PlayersProps = {
  players: Player[];
};
export type Player = {
  id: number;
  name: string;
  surname: string;
  active: boolean;
};

export function PlayerWelcome({ players }: PlayersProps) {
  return (
    <Welcome>
      {players.map(player => (
        <div key={player.id}> Hello: {`${player.name} ${player.surname}`}</div>
      ))}
    </Welcome>
  );
}
