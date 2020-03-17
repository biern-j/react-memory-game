import React, { useState } from "react";

import { NewPlayerWraper, NewPlayerInput, NewPlayerName } from "./style";

type GameFormProps = {
  onSubmit: (value: { name: string; surname: string }) => void;
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
      <NewPlayerWraper primary={false}>
        <NewPlayerName>Name:</NewPlayerName>
        <NewPlayerInput
          value={value.name}
          type="text"
          name="name"
          onChange={e => onChange({ ...value, name: e.target.value })}
          required
        />
      </NewPlayerWraper>

      <NewPlayerWraper primary={true}>
        <NewPlayerInput type="submit" value="Submit" />
      </NewPlayerWraper>
    </form>
  );
};
