import * as React from "react";
import { LevelInput } from "./style";
type LevelInputProps = {
  levelButtons: GameDifficultyLevel[];
  onClick: (value: string) => void;
};

export type GameDifficultyLevel = {
  levelTitle: string;
  multiple: number;
  choosen: boolean;
};

export function LevelButtons({ levelButtons, onClick }: LevelInputProps) {
  const makeButtons = (level: GameDifficultyLevel) => {
    console.log("level in map", level);
    return (
      <label key={level.levelTitle}>
        {level.levelTitle}
        <LevelInput
          name="Diffivultylevel"
          type="radio"
          value={level.levelTitle}
          checked={level.choosen} // true /false
          onChange={e => onClick(e.target.value)}
        />
      </label>
    );
  };
  return <form>{levelButtons.map(item => makeButtons(item))}</form>;
}

// Dlaczego "void":
// const foo1 = () => "fuu";
// const foo: void = foo1; // () => "fuu"
// const fooGetValueFromFoo1: string = foo1(); // "fuu"

{
  /* <input type="radio" value="option1" 
                      checked={this.state.selectedOption === 'option1'} 
                      onChange={this.handleOptionChange} /> */
}
