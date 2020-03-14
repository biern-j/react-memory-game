import React, { useState } from "react";

import { Player } from "./playerWelcome";
import { Label, Input, Text} from "./style"

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
      <Label>
        <Text>Name:</Text>
          <Input
            value={value.name}
            type="text"
            name="name"
            onChange={e => onChange({ ...value, name: e.target.value })}
          />
      </Label>
      <Label>
          <Text>Surname:</Text>
          <Input
            value={value.surname}
            type="text"
            name="surname"
            onChange={e => onChange({ ...value, surname: e.target.value })}
          />
      </Label>

      <input type="submit" value="Submit" />
    </form>
  );
};
