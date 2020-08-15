import styled from "styled-components";
import { Button } from "../../style";

export const NewPlayerWelcome = styled.div`
  display: block;
  font-size: 2rem;
  color: #6a4162;
  padding: 5rem 0;
  background-color: #fee4c4;
  margin: 2rem 0;
  width: 100%;
  border-radius: 2rem;
  height: 35rem;
`;

export const NewPlayer = styled.div`
  text-align: right;
`;

export const NewPlayerList = styled.div`
  padding: 1rem 0.5rem;
  display: inline-block;
`;

export const RemovePlayerButton = styled(Button)`
  margin-right: 0;
  margin-left: 2rem;
  color: #fee4c4;
  background-color: #f57d7c;
`;
