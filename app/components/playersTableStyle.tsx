
import styled from 'styled-components'

export const PlayerTableContainer = styled.div`
margin-bottom: 1rem;
padding: 2rem;
 width: 100%;
 background-color: #FFC1A6;
 border-radius: 2rem;
 color: #7C79A2;

 h1{
   margin: 3rem 0;
  text-transform: uppercase;
  text-align: center;
  color: #7C79A2;
}
`

export const PlayerName = styled.div<{activePlayer: boolean}>`
${({activePlayer}) => activePlayer ? "background-color: #7C79A2; color: #FEE4C4;" : "background-color: #FEE4C4; color: #7C79A2;"}
text-align: center;
    border: none;
    border-radius: 50px;
    margin: 0 3rem;
    font-size: 100%;
    padding: .5rem 3rem;
    text-transform: uppercase;
    font-weight: bold;
`;

export const PlayerPoint = styled.div`
color: #5A809E;
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

export const RestartButton = styled.button`
display: inline-block;
    border: none;
    border-radius: 50px;
    margin-top: 2rem;
    margin-right: 2rem;
    padding: 1rem 3rem;
    cursor: pointer;
    text-transform: uppercase;
    color: #FEE4C4;
    font-weight: bold;
background-color: #F57D7C;
&:hover {
    background-color: #7C79A2;
    color: #F57D7C;
}
`

export const NewGameButton = styled.button`
display: inline-block;
    border: none;
    border-radius: 50px;
    margin-top: 2rem;
    padding: 1rem 3rem;
    cursor: pointer;
    text-transform: uppercase;
    color: #FEE4C4;
    font-weight: bold;
background-color: #6CC2BD;
&:hover {
    background-color: #7C79A2;
    color: #F57D7C;
}
`;