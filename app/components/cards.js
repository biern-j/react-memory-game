import React from "react";

export function Cards({number, cards}) {
    const makeButtons = (card) => {
        console.log(card);
    return <button key={card.id} style={{backgroundColor: card.color}}>{card.id}{card.color}</button>;
    };
    const map1 = cards.map(item => makeButtons(item));

    return map1
}