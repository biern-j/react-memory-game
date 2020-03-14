import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

type ButtonProps = {
  backgroundColorCard: { clicked: boolean; found: boolean; color: string };
};

export const Button = styled.button<ButtonProps>`
  border: 2px solid black;
  margin: 4px;
  padding: 10px;
  background-color: ${props => {
    const { clicked, found, color } = props.backgroundColorCard;
    return clicked || found ? color : "gray";
  }};
`;

export const NameShadow = styled.div<{ primary: boolean }>`
  color: ${props => (props.primary ? "green" : "red")};
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 10vh 10vw 10vh 10vw;
    box-sizing: border-box;
    background: #00ffcc;
    font-size:10px;
  }
  `;

export const Text = styled.p`
  display: inline-block;
  font-size: 2em;
  color: orange;
  `;

export const Input = styled.input`
  font-size: 1.8em;
  padding: 0.8em;
  `;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  width: auto;
  padding: 3em;
  margin: 2vh auto;
  background: #66ffe0;
  clear: left;
`;
