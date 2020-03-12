import React, { useState } from "react";

import { Player } from "./playerWelcome";

type GameFormProps = {
  onSubmit: (value: Player) => void;
};

export const GameForm = ({ onSubmit }: GameFormProps) => {
  const [value, onChange] = useState({ name: "", surname: "" });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(value);
        console.log("e", e);
      }}
    >
      <label>
        Name:
        <input
          value={value.name}
          type="text"
          name="name"
          onChange={e => onChange({ ...value, name: e.target.value })}
        />
      </label>
      <label>
        Surname:
        <input
          value={value.surname}
          type="text"
          name="surname"
          onChange={e => onChange({ ...value, surname: e.target.value })}
        />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
};
