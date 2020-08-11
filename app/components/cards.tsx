import * as React from "react";
import { CardButton, CardContainer } from "./cardsStyle";
interface CardsProps {
  dificulty: number;
  cards: Card[];
  onClick: any;
}
export type Card = {
  id: number;
  color: string;
  clicked: boolean;
  found: boolean;
};

export function Cards({ dificulty, cards, onClick }: CardsProps) {
  const makeButtons = (card: Card) => {
    return (
      <CardButton
        backgroundColorCard={card}
        disabled={card.found ? true : card.clicked}
        onClick={() => onClick(card.id)}
        key={card.id}
      />
    );
  };
return <CardContainer dificulty={dificulty}>{cards.map(item => makeButtons(item))}</CardContainer>;
}
