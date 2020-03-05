import * as React from "react";
import { Button } from "./style";

interface CardsProps {
  cards: Card[];
  onClick: any;
}
type Card = { id: number; color: string; clicked: boolean; found: boolean };

export function Cards({ cards, onClick }: CardsProps) {
  const makeButtons = (card: Card) => {
    return (
      <Button
        backgroundColorCard={card}
        disabled={card.found ? true : card.clicked}
        onClick={() => onClick(card.id)}
        key={card.id}
      >
        {card.id}
        {card.color}
      </Button>
    );
  };
  return <div>{cards.map(item => makeButtons(item))}</div>;
}
