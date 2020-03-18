import * as React from "react";
import { LevelInput } from "./style";
type LevelInputProps = {
  levelButtons: GameDifficultyLevel[];
  ocClick: (value: GameDifficultyLevel) => void;
  
}
// export type Level = {
//   color: string;
//   clicked: boolean;
// };
export type GameDifficultyLevel = {
  levelTitle: string;
  multiple: number;
  choosen: boolean;
};

export function LevelButtons({levelButtons, ocClick }: LevelInputProps) {

  const makeButtons = (level: GameDifficultyLevel) => {
    return (
      <LevelInput type="radio" value={level.levelTitle} checked={false} onClick={() => ocClick(level)} key={level.levelTitle}>
        {level.levelTitle}
      </LevelInput>
    );
  };
  return <div>{levelButtons.map(item => makeButtons(item))}</div>;
}

// Dlaczego "void":
// const foo1 = () => "fuu";
// const foo: void = foo1; // () => "fuu"
// const fooGetValueFromFoo1: string = foo1(); // "fuu"
