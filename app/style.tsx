import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import {device} from './RWD'
 
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

html, body {
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

  h2 {
    margin: 2rem;
  }

  h3 {
    margin: 1rem;
    text-transform: uppercase; 
  }
  `

  export const GameContainer = styled.div<{gameStart: boolean}> `
  ${({gameStart}) => gameStart ? "margin: 0 -10rem; padding: 1rem 10rem;" : "margin: 0 -10rem; padding: 7rem 70rem;"};

  @media @media ${device.mobileM} {
    margin: 0 -3rem; padding: 1rem;
  }

  @media ${device.tablet} {
    margin: 0 -10rem; padding: 7rem 15rem;
  }

  @media ${device.desktop} {
    margin: 0 -10rem; padding: 10rem 20rem;    
  }
 `

 export const GameStart = styled.div`
 padding: 2rem;
 width: 100%;
 background-color: #FFC1A6;
 border-radius: 2rem;
 text-align: center;
 color: #7C79A2;

 header {
  text-transform: uppercase;
  text-align: center;
}
`

export const NewPlayerName = styled.p`
  display: inline-block;
  font-size: 2em;
  color: #6a4162;
  margin: 1em;
  border: 0.4em solid black;
`

export const DifficultyLevelLabel = styled.label`
  display: inline-block;
  border: 0.4em solid black;
`

export const DifficultyForm = styled.form`
  border: 0.4em solid black;
`

export const PlayersTableContainer = styled.div`
  background-color: white;
  display: inline-block;
  border: 0.4em solid black;
`

export const GamePlayContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 0.4em solid black;
`



export const LeftGameTable = styled.div`
  display: inline-block;

  border: 0.4em solid blue;
  left: 0;
`

export const RightGameTable = styled.div`
  width: 90%;
  height: 90%;
  border: 0.4em solid black;
  right: 0;
  bottom: 0;
`


export const GamePlay = styled.div`
  width: 100%;
  height: 90%;
  dispolat: inline-block;
  border: 0.4em solid black;
`

export const PlayerTableContainer = styled.div`
  display: inline-block;
  * {
    height: 20%;
    display: inline-block;
  }
`
