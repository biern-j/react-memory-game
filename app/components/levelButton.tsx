import * as React from "react";
import { LevelButton } from "./style";
interface LevelButtonProps {
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

export function LevelButtons({ levelButtons, ocClick }: LevelButtonProps) {
  const makeButtons = (level: GameDifficultyLevel) => {
    return (
      <LevelButton onClick={() => ocClick(level)} key={level.levelTitle}>
        {level.levelTitle}
      </LevelButton>
    );
  };
  return <div>{levelButtons.map(item => makeButtons(item))}</div>;
}

// Dlaczego "void":
// const foo1 = () => "fuu";
// const foo: void = foo1; // () => "fuu"
// const fooGetValueFromFoo1: string = foo1(); // "fuu"
