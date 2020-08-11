import styled from 'styled-components'
import {device} from '../RWD'

export const NewPlayerForm = styled.form`
margin: 1rem 5rem;

@media screen ${device.mobileS} {
    margin: 1rem;
  }

  @media screen ${device.tablet} {
    margin: 1rem 3rem;
  }

  @media screen ${device.laptop} {
    margin: 1rem 5rem;    
  }
`;

export const NewPlayerBox = styled.div`
`;

export const NewPlayerLabel = styled.label`
position: absolute;
overflow: hidden;
visibility: hidden;
`

export const NewPlayerInput = styled.input`
border-radius: 5px;
padding: 2rem;
border: medium none;
width: 70%;
display: inline-block;

@media screen ${device.mobileS} {
    width: 100%;
  }

  @media screen ${device.tablet} {
    width: 100%;
  }
}
`
export const NewPlayerInputSubmintButtonBox = styled.div`
display: inline-block;
width: 30%;
@media screen ${device.mobileS} {
    display: block;
    width: 100%;
  }
`;

export const NewPlayerInputSubmintButton = styled.button<{disabled: boolean}> `
display: inline-block;
border: medium none;
border-radius: 5px;
padding: 2rem 3rem;
cursor: pointer;
text-transform: uppercase;
margin-left: 0.5rem;
width: 100%;
color: #FEE4C4;
font-weight: bold;
    background-color: ${ ({disabled}) => disabled ? "gray" : "#F57D7C"};

    &:hover {
         ${ ({disabled}) => disabled ? "background-color: gray" : "background-color: #7C79A2; color: #F57D7C;"}
    }
    @media screen ${device.mobileS} {
        margin-left: 0;
        margin-top: .5rem;
      }
`;
