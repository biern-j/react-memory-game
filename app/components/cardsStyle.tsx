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

export const CardContainer = styled.div<{ totalCard: number }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13%, auto));
  grid-gap: 5px;
  align-items: center;
  justify-items: center;
`
export const CardButton = styled.button<CardButtonProps>`
  border: 2px solid #f57d7c;
  border-radius: 10px;
  width: 100%;
  height: 20rem;
  ${(props) => {
    const { clicked, found, color } = props.backgroundColorCard
    return clicked || found
      ? `
      background-image: url(${color}); 
      background-repeat: no-repeat; 
      background-size: cover;      
      `
      : 'background-color: #FEE4C4'
  }};
`
