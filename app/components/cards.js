import React from "react";
import { Button } from "./style";

export function Cards({ cards, onClick }) {
  const makeButtons = card => {
    const backgroundColor = card;
    console.log("card", card, "backgroundColor", backgroundColor);
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
