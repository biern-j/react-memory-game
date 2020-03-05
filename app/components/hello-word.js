import React from "react";

export function HelloWord({ names }) {
  return (
    <div>
      <div>Hello World {names[0]}</div>
      <div>Hello World {names[1]}</div>
    </div>
  );
}
