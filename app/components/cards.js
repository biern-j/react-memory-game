import React from "react";

export function Cards({ cards, getIdOnClick }) {
  const makeButtons = card => {
    console.log("card.disabled", card.disable);
    return (
      <button
        disabled={card.disable}
        onClick={() => getIdOnClick(card.id)}
        key={card.id}
        style={{ backgroundColor: card.disable ? card.color : "gray" }}
      >
        {card.id}
        {card.color}
      </button>
    );
  };
  const map1 = cards.map(item => makeButtons(item));

  return map1;
}
