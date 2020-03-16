import * as React from "react";
import { CardButton } from "./style";
interface CardsProps {
  cards: Card[];
  onClick: any;
}
export type Card = {
  id: number;
  color: string;
  clicked: boolean;
  found: boolean;
};

export function Cards({ cards, onClick }: CardsProps) {
  const makeButtons = (card: Card) => {
    return (
      <CardButton
        backgroundColorCard={card}
        disabled={card.found ? true : card.clicked}
        onClick={() => onClick(card.id)}
        key={card.id}
      >
        {card.id}
        {card.color}
      </CardButton>
    );
  };
  return <div>{cards.map(item => makeButtons(item))}</div>;
}
