import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { device } from "./RWD";

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit; 
}

html {
  font-size: 60%;
}

html, 
body {
  overflow-x: hidden;
}

body {
  font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    color: black;
    padding: 30px;
    box-sizing: border-box;
    background-color: #5A809E;
  }
  
h1 {
  margin: 3rem 0;
  font-weight: 1000;
  color: #7c79a2;
}
h2 {
  font-weight: 900;
  color: #6cc2bd;
}
h3 {
  font-weight: 700;
  color: #7c79a2;
}
h2,
h3 {
  margin: 2rem 0;
}
h1,
h2,
h3 {
  text-transform: uppercase; 
}
`;

export const GameContainer = styled.div<{ gameStart: boolean }>`
  ${({ gameStart }) =>
    gameStart
      ? "margin: 0 -10rem; padding: 1rem 10rem;"
      : "margin: 0 -10rem; padding: 7rem 70rem;"};

  @media @media ${device.mobileM} {
    margin: 0 -3rem;
    padding: 1rem;
  }

  @media ${device.tablet} {
    margin: 0 -10rem;
    padding: 7rem 15rem;
  }

  @media ${device.desktop} {
    margin: 0 -10rem;
    padding: 10rem 20rem;
  }
`;

export const GameStart = styled.div`
  padding: 2rem;
  width: 100%;
  background-color: #ffc1a6;
  border-radius: 2rem;
  text-align: center;
  color: #7c79a2;

  header {
    text-transform: uppercase;
    text-align: center;
  }
`;
