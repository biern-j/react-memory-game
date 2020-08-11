import * as React from "react";
import { LevelInput, LevelBox, LevelForm } from "./levelButtonStyle";
type LevelInputProps = {
  levelButtons: GameDifficultyLevel[];
  onClick: (value: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type GameDifficultyLevel = {
  levelTitle: string;
  multiple: number;
  choosen: boolean;
};

export const LevelButtons = ({ levelButtons, onClick }: LevelInputProps) =>
<LevelForm>{levelButtons.map(item =>
      <LevelBox key={item.levelTitle}>
     
     <LevelInput selectedDifficulty={item.choosen}
      onClick={(e) => onClick(item.levelTitle, e)}
     >
     {item.levelTitle}
     </LevelInput>
     </LevelBox>)}
     </LevelForm>;

