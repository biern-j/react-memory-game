import React from "react";

export function HelloWord({color, names}) {
  console.log("Hello world props", color, names);
  return <div>
    <div>Hello World {names[0]}</div>
    <div>Hello World {names[1]}</div>
    </div>;
}
