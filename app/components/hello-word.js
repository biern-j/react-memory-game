import React from "react";
import { NameShadow } from "./style";

export function HelloWord({ names }) {
  return (
    <div>
      <NameShadow primary>Hello World {names[0]}</NameShadow>
      <NameShadow primary>Hello World {names[1]}</NameShadow>
    </div>
  );
}
