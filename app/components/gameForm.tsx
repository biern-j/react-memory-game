import React from "react";

type State = {
  value: string;
};

type Props = {
  onSubmit: (value: string) => void;
};

export class GameForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: "name" };
  }
  onChange(value: string) {
    this.setState({ value });
  }
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmit(`submit ${this.state.value}`);
          console.log("e", e);
        }}
      >
        <label>
          Name:
          <input
            value={this.state.value}
            type="text"
            name="name"
            onChange={e => this.onChange(e.target.value)}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
