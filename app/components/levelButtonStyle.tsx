import styled from "styled-components";
import { device } from "../RWD";

export const LevelForm = styled.div`
  border-radius: 5px;
  width: 100%;

  @media screen ${device.mobileS} {
    width: 60%;
  }
`;

export const LevelInput = styled.button<{ selectedDifficulty: boolean }>`
  display: inline-block;
  border: none;
  border-radius: 50px;
  margin-top: 2rem;
  padding: 1rem 3rem;
  cursor: pointer;
  text-transform: uppercase;
  color: #fee4c4;
  font-weight: bold;
  transition: al1s;
  ${({ selectedDifficulty }) =>
    selectedDifficulty
      ? "background-color: #7C79A2"
      : "background-color: #F57D7C"};
  &:hover {
    background-color: #7c79a2;
    color: #f57d7c;
    transform: scale(1.2);
  }

  @media screen ${device.mobileS} {
    display: inline;
    padding: 1rem 1.5rem;
    margin: 0.5rem;
  }
`;

export const LevelBox = styled.div`
  display: inline-block;
  padding: 1rem 3rem;
  margin-top: 2rem;
`;
