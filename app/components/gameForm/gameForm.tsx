import React, { useState } from "react";

import {
  NewPlayerForm,
  NewPlayerInput,
  NewPlayerInputSubmitButton,
  NewPlayerBox,
  NewPlayerInputSubmitButtonBox,
} from "./gameFormStyle";
import { Card } from "../cards/cards";
import { PlayerWelcome, Player } from "../playerWelcome/playerWelcome";
import {
  GameStateManager,
  GameState,
} from "../gameStateManager/gameStateManager";
import { LevelButtons, GameDifficultyLevel } from "../levelButton/levelButton";

type State = {
  cards: Card[];
  players: Player[];
  gameState: GameState;
  gameDifficulty: GameDifficultyLevel[];
};
type GameFormProps = {
  onSubmit: (value: { name: string }) => void;
  gameState: State;
  onLevelSetup: (level: string) => void;
  onHandleGameStart: (start: boolean) => void;
  onRemovePlayer: (id: number) => void;
};

export const GameForm = ({
  onSubmit,
  gameState,
  onLevelSetup,
  onHandleGameStart,
  onRemovePlayer,
}: GameFormProps) => {
  const [value, onChange] = useState({ name: "" });

  return (
    <NewPlayerForm>
      <NewPlayerBox>
        <NewPlayerInput
          data-cy="new-player-input"
          value={value.name}
          defaultValue=""
          placeholder="New Player Name"
          name="name"
          onChange={(e) => onChange({ ...value, name: e.target.value })}
          required
          disabled={gameState.players.length >= 4}
        />

        <NewPlayerInputSubmitButtonBox>
          <NewPlayerInputSubmitButton
            data-cy="submit-player"
            disabled={gameState.players.length >= 4}
            onClick={(e) => {
              e.preventDefault();
              onSubmit(value);
              onChange({ name: "" });
            }}
          >
            Add player
          </NewPlayerInputSubmitButton>
        </NewPlayerInputSubmitButtonBox>
      </NewPlayerBox>

      <h2>Player:</h2>
      <PlayerWelcome
        players={gameState.players}
        onRemovePlayer={(id) => onRemovePlayer(id)}
      />

      <LevelButtons
        levelButtons={gameState.gameDifficulty}
        onClick={(
          level: string,
          e: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => {
          e.preventDefault();
          onLevelSetup(level);
        }}
      />
      <GameStateManager
        totalPlayers={gameState.players.length}
        gameState={gameState.gameState}
        onGameStart={(gameStart: boolean) => onHandleGameStart(gameStart)}
      />
    </NewPlayerForm>
  );
};
