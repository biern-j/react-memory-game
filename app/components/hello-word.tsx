import React from "react";

interface NamesProps {
  nameFromInput: string | null;
  names: Name[];
}
type Name = string;

export function HelloWord({ nameFromInput, names }: NamesProps) {
  return (
    <div>
      <div>Hello {names[0]}</div>
      <div>Hello {names[1]}</div>
      <div>Hello {nameFromInput}</div>
    </div>
  );
}
