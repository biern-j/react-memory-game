import React from "react";

export function Cards({ cards, getIdOnClick }) {
  const makeButtons = card => {
    return (
      <button
        disabled={card.disabled}
        onClick={() => getIdOnClick(card.id)}
        key={card.id}
        style={{ backgroundColor: card.color }}
      >
        {card.id}
        {card.color}
      </button>
    );
  };
  const map1 = cards.map(item => makeButtons(item));

  return map1;
}
