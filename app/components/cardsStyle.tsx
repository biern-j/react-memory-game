import styled, { keyframes } from 'styled-components'

type CardButtonProps = {
  backgroundColorCard: { clicked: boolean; found: boolean; color: string }
}

const findingAffirmation = keyframes`
    0% {
        opacity: 1;
        transform: scale(1.1);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`
const countCardPerRow = (dificulty: number) => {
  //hard 4 os
  if (dificulty === 32) {
    
    return `
    grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
    `;
  }
  // hard 3 os: 3 * 4 * 2 = 24
  if (dificulty === 24) {
    return `
    grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
    `;
  }
  // hard 2 os: 2 * 4 * 2 = 16
  if (dificulty === 16) {
    return `
    grid-template-columns: 3fr 3fr 3fr 3fr 3fr 3fr; 
    `;
  }
  //medium 4os
  if (dificulty === 24) {
    return `
    grid-template-columns: 4fr 4fr 4fr 4fr 4fr 4fr 4fr 4fr; 
    `;
  }
    // medium 3 os: 3 * 3 * 2 = 18
    if (dificulty === 18) {
      return `
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
      `;
    }
    // medium 2 os: 2 * 3 * 2 = 12
    if (dificulty === 12) {
      return `
      grid-template-columns:1fr 1fr 1fr 1fr; 
      `;
    }
     // medium 1 os: 3 * 2 = 6
     if (dificulty === 6) {
      return `
      grid-template-columns:1fr 1fr 1fr 1fr; 
      `;
    }
// easy 4 os
  if (dificulty === 16) {
    return `
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
    `;
  }
  // easy 3 os: 3 * 2 * 2 = 12
  if (dificulty === 12) {
    return `
    grid-template-columns:1fr 1fr 1fr 1fr;   
    `;
  }
  // easy 2 os: 2 * 2 * 2 = 8
  if (dificulty === 8) {
    return `
    grid-template-columns:3fr 3fr 3fr; 
    `;
  }
   // easy 1 os: 2 * 2 = 4
   if (dificulty === 4) {
    return `
    grid-template-columns: 1fr 1fr 1fr 1fr;
    * {
      width: 40rem;
      height: 40rem;
    } 
    `;
  }

}

export const CardContainer = styled.div<{ dificulty: number }>`
  width: 80vw;
  height: 80vh;
  text-align: center;
  display: grid;
  ${({dificulty}) => countCardPerRow(dificulty)}
  column-gap: 5px;
  row-gap: 5px;
  align-items: center;
  justify-items: center;
  align-self: stretch;
  * {
    width: 20rem;
    height: 20rem;
  }
`
export const CardButton = styled.button<CardButtonProps>`
  border: 2px solid #F57D7C;
  border-radius: 10px;
  ${(props) => {
    const { clicked, found, color } = props.backgroundColorCard
    return clicked || found
      ? `
      background-image: url(${color}); 
      background-repeat: no-repeat; 
      background-size: cover;      
      `
      : 'background-color: #FEE4C4;'
  }};
`