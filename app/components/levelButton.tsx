import * as React from "react";
import { LevelButton } from "./style";
interface LevelButtonProps {
  levelButtons: Level[];
  onClick: any;
}
export type Level = {
  id: number;
  color: string;
  clicked: boolean;
};

export function LevelButtons({ levelButtons, onClick }: LevelButtonProps) {
  const makeButtons = (level: Level) => {
    return (
      <LevelButton
        backgroundLevelButton={level}
        onClick={() => onClick(level.id)}
        key={level.id}
      >
        {level.id}
        {level.color}
      </LevelButton>
    );
  };
  return <div>{levelButtons.map(item => makeButtons(item))}</div>;
}
