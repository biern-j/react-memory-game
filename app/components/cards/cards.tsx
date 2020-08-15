import * as React from "react";
import { CardButton, CardContainer } from "./cardsStyle";

type CardsProps = {
  totalCard: number;
  cards: Card[];
  onClick: (id: number) => void;
};
export type Card = {
  id: number;
  color: string;
  clicked: boolean;
  found: boolean;
};

export function Cards({ totalCard, cards, onClick }: CardsProps) {
  const makeButtons = (card: Card) => (
    <CardButton
      backgroundColorCard={card}
      disabled={card.found ? true : card.clicked}
      onClick={() => onClick(card.id)}
      key={card.id}
    />
  );

  return (
    <CardContainer totalCard={totalCard}>
      {cards.map((item) => makeButtons(item))}
    </CardContainer>
  );
}
