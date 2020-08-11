import React from 'react'
import { NewPlayerWelcome, NewPlayer, NewPlayerList, RemovePlayerButton } from './playerWelcomeStyle'

type PlayersProps = {
  players: Player[],
  onRemovePlayer: (id: number) => void
}
export type Player = {
  id: number
  name: string
  active: boolean
}

export function PlayerWelcome({ players, onRemovePlayer }: PlayersProps) {
  return (
    <NewPlayerWelcome>
       <NewPlayerList>
      {players.map(player => <NewPlayer key={player.id}> 
      {player.name}
        <RemovePlayerButton onClick={() => onRemovePlayer(player.id)}>X</RemovePlayerButton>
      </NewPlayer>)}
       </NewPlayerList>
    </NewPlayerWelcome>
  )
}
