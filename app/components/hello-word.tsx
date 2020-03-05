import * as React from "react";

interface NamesProps {
  names: Name[];
}
type Name = string;

export function HelloWord({ names }: NamesProps) {
  return (
    <div>
      <div>Hello World {names[0]}</div>
      <div>Hello World {names[1]}</div>
    </div>
  );
}
