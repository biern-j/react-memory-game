import React, { useState } from "react";

import { Player } from "./playerWelcome";
import {
  NewPlayerDataContainer,
  NewPlayerInput,
  PersonalDataTytle,
  LevelButton
} from "./style";
import { LevelButtons } from "./levelButton";

type GameFormProps = {
  onSubmit: (value: Player) => void;
};

export const GameForm = ({ onSubmit }: GameFormProps) => {
  const [value, onChange] = useState({ name: "", surname: "" });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onChange({ name: "", surname: "" });
        onSubmit(value);
        console.log("e", e);
      }}
    >
      <NewPlayerDataContainer primary={false}>
        <PersonalDataTytle>Name:</PersonalDataTytle>
        <NewPlayerInput
          value={value.name}
          type="text"
          name="name"
          onChange={e => onChange({ ...value, name: e.target.value })}
          required
        />
      </NewPlayerDataContainer>

      <NewPlayerDataContainer primary={false}>
        <PersonalDataTytle>Surname:</PersonalDataTytle>
        <NewPlayerInput
          value={value.surname}
          type="text"
          name="surname"
          onChange={e => onChange({ ...value, surname: e.target.value })}
        />
      </NewPlayerDataContainer>

      <NewPlayerDataContainer primary={true}>
        <NewPlayerInput type="submit" value="Submit" />
      </NewPlayerDataContainer>

      <NewPlayerDataContainer primary={true}>
        <LevelButtons backgroundLevelButton={????????????? }
       
        onClick={() => onclick(level.id)}
        key={level.id}
        />
      </NewPlayerDataContainer>

    </form>
  );
};


// export function Cards({ cards, onClick }: CardsProps) {
//   const makeBuonttons = (card: Card) => {
//     return (
//       <CardButton
//         backgroundColorCard={card}
//         disabled={card.found ? true : card.clicked}
//         onClick={() => onClick(card.id)}
//         key={card.id}
//       >
//         {card.id}
//         {card.color}
//       </CardButton>
//     );
//   };
//   return <div>{cards.map(item => makeButtons(item))}</div>;
// }