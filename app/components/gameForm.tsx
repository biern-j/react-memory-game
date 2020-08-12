import React, { useState } from "react";

import { NewPlayerForm, NewPlayerLabel, NewPlayerInput, NewPlayerInputSubmintButton, NewPlayerBox, NewPlayerInputSubmintButtonBox } from './gameFormStyle';
import { Card } from './cards';
import { PlayerWelcome, Player } from './playerWelcome';
import { GameStateManager, GameState } from './gameStateManager';
import { LevelButtons, GameDifficultyLevel } from './levelButton';

type State = {
  cards: Card[]
  players: Player[]
  gameState: GameState
  gameDiffculty: GameDifficultyLevel[]
};
type GameFormProps = {
  onSubmit: (value: { name: string; }) => void;
  gameState: State;
  onLevelSetup: (level: string) => void;
  onHandleGameStart: (start: boolean) => void;
  onRemovePlayer: (id: number) => void;
};



export const GameForm = ({ onSubmit, gameState, onLevelSetup, onHandleGameStart, onRemovePlayer }: GameFormProps) => {

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
          onChange={e => onChange({ ...value, name: e.target.value })}
          required
          disabled={gameState.players.length >= 4}
        />

        <NewPlayerInputSubmintButtonBox>
          <NewPlayerInputSubmintButton data-cy="submit-player" disabled={gameState.players.length >= 4} onClick={(e) => {
             e.preventDefault();
             onSubmit(value);
             onChange({name: ""})
             console.log("eh", e);
          }}>Add player</NewPlayerInputSubmintButton>
        </NewPlayerInputSubmintButtonBox>
      </NewPlayerBox>
      
      <h2>Player:</h2>
      <PlayerWelcome players={gameState.players} onRemovePlayer={(id) => onRemovePlayer(id)}/>

      <LevelButtons
        levelButtons={gameState.gameDiffculty}
        onClick={(level: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          console.log("ah", e);
          onLevelSetup(level)
        }}
      />
      <GameStateManager
        totalPlayers={gameState.players.length}
        gameState={gameState.gameState}
        onGameStart={(gameStart: boolean) =>
          onHandleGameStart(gameStart)
        }
      />
    </NewPlayerForm>
  );
};