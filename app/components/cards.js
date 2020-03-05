import React from "react";

export function Cards({ cards, onClick }) {
  const makeButtons = card => {
    return (
      <button
        disabled={card.found ? true : card.clicked}
        onClick={() => onClick(card.id)}
        key={card.id}
        style={{
          backgroundColor: card.clicked || card.found ? card.color : "gray"
        }}
      >
        {card.id}
        {card.color}
      </button>
    );
  };
  return cards.map(item => makeButtons(item));
}
