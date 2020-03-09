import React from "react";

type NamesProps = {
  playerName?: PlayerName;
  names: Name[];
};
export type PlayerName = { name: string; surname: string };

type Name = string;

export function HelloWord({ playerName, names }: NamesProps) {
  return (
    <div>
      <div>Hello {names[0]}</div>
      <div>Hello {names[1]}</div>
      <div>
        Hello:{" "}
        {playerName !== undefined && `${playerName.name}-${playerName.surname}`}
      </div>
    </div>
  );
}
