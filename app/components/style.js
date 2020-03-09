import styled from "styled-components";

export const Button = styled.button`
  border: 2px solid black;
  margin: 4px;
  padding: 10px;
  background-color: ${props => {
    const { clicked, found, color } = props.backgroundColorCard;
    return clicked || found ? color : "gray";
  }};
`;

export const NameShadow = styled.div`
  color: ${props => (props.primary > 0 ? "green" : "red")};
`;
