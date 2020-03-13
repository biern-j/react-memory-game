import React from "react";

type PlayersProps = {
  players: Player[];
};
export type Player = { id?: number; name: string; surname: string };

export function PlayerWelcome({ players }: PlayersProps) {
  return (
    <div>
      <div>
        {players.map(player => (
          <div key={player.id}>Hello: {`${player.name} ${player.surname}`}</div>
        ))}
      </div>
    </div>
  );
}
