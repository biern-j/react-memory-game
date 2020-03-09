import React from "react";
// import { Button } from "./components/button";

import styled from "styled-components";

//export //
const Button = styled.button`
border: 2px solid black;
margin: 4px;
padding: 10px;
`




export function Cards({ cards, onClick }) {
  const makeButtons = card => {
    return (
      <Button
        disabled={card.found ? true : card.clicked}
        onClick={() => onClick(card.id)}
        key={card.id}
        style={{
          backgroundColor: card.clicked || card.found ? card.color : "gray"
        }}
      >
        {card.id}
        {card.color}
      </Button>
    );
  };
  return cards.map(item => makeButtons(item));
}
