import styled from "styled-components";
import { Button } from "../../style";

export const PlayerTableContainer = styled.div`
  margin-bottom: 1rem;
  padding: 2rem;
  width: 100%;
  background-color: #ffc1a6;
  border-radius: 2rem;
  color: #7c79a2;
`;

export const PlayerName = styled.div<{ activePlayer: boolean }>`
  ${({ activePlayer }) =>
    activePlayer
      ? "background-color: #7C79A2; color: #FEE4C4;"
      : "background-color: #FEE4C4; color: #7C79A2;"}
  text-align: center;
  border: none;
  border-radius: 50px;
  margin: 0 3rem;
  font-size: 100%;
  padding: 0.5rem 3rem;
  text-transform: uppercase;
  font-weight: bold;
`;

export const PlayerPoint = styled.div`
  color: #5a809e;
  margin: 0 3rem;
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: 1000;
`;

export const PlayerRankingBox = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const RankingCel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RestartButton = styled(Button)`
  color: #fee4c4;
  background-color: #f57d7c;
  &:hover {
    background-color: #7c79a2;
    color: #f57d7c;
  }
`;

export const NewGameButton = styled(Button)`
  color: #fee4c4;
  background-color: #6cc2bd;
`;
