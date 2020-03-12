import React from "react";

type PlayersProps = {
  players?: Player[];
};
export type Player = { name: string; surname: string };

export function PlayerWelcome({ players }: PlayersProps) {
  return (
    <div>
      <div>
        {players !== undefined &&
          players.map(player => (
            <div>Hello: {`${player.name} ${player.surname}`}</div>
          ))}
      </div>
    </div>
  );
}
