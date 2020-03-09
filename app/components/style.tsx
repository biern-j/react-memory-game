import styled from "styled-components";
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
