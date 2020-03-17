import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

type CardButtonProps = {
  backgroundColorCard: { clicked: boolean; found: boolean; color: string };
};

type NewPlayerWraperProps = {
  primary: boolean;
};

type NewPlayerInputProps = {
  type: string;
};

type LevelButtonProps = {
  backgroundLevelButton: { clicked: boolean, color: string };
};

export const CardButton = styled.button<CardButtonProps>`
  border: 2px solid black;
  margin: 4px;
  padding: 10px;
  background-color: ${props => {
    const { clicked, found, color } = props.backgroundColorCard;
    return clicked || found ? color : "gray";
  }};
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 10vh 10vw 10vh 10vw;
    box-sizing: border-box;
    background: #f6d2d6;
    font-size:10px;
  }
  `;

export const NewPlayerName = styled.p`
  display: inline-block;
  font-size: 2em;
  color: #6a4162;
`;

export const NewPlayerInput = styled.input<NewPlayerInputProps>`
  font-size: 1.8em;
  padding: 0.8em;
  border-radius: 5%;
  color: ${props => (props.type === "submit" ? "#6a4162" : "#fefafa")};
  background: ${props => (props.type === "submit" ? "#f39db6" : "#d46a92")};
`;

export const NewPlayerWraper = styled.label<NewPlayerWraperProps>`
  display: flex;
  justify-content: center;
  width: ${props => (props.primary ? "0" : "auto")};
  padding: ${props => (props.primary ? "0" : "3em")};
  margin: 2vh auto;
  background: #f39db6;
  clear: left;
`;

export const NewPlayerWelcome = styled.div`
  padding: 3em;
  display: inline-block;
  font-size: 2em;
  color: #6a4162;
`;

export const GameStatePanel = styled.button`
  border: 0.4em solid pink;
  margin: 0 3em 3em 3em;
  padding: 1em 2em;
  font-size: 2em;
  color: #6a4162;
  border-radius: 5%;
  background-color: #fefafa;
`;

export const LevelButton = styled.button<LevelButtonProps>`
  border: 0.4em solid pink;
  margin: 2em;
  padding: 0.5em 1em;
  font-size: 2em;
  color: #6a4162;
  border-radius: 5%;
  background-color: ${props => {
    const { clicked, color } = props.backgroundLevelButton;
    return clicked ? color : "red";
  }};
  `;