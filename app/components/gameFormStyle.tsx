import styled from 'styled-components'
import { device } from '../RWD'

export const NewPlayerForm = styled.form`
  margin: 1rem 5rem;

  @media ${device.tablet} {
    margin: 1rem 3rem;
  }
  @media ${device.mobileM} {
    margin: 1rem;
  }
`

export const NewPlayerBox = styled.div``

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

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobileM} {
    width: 100%;
  }
`
export const NewPlayerInputSubmitButtonBox = styled.div`
  display: inline-block;
  width: 30%;

  @media ${device.mobileM} {
    display: block;
    width: 100%;
  }
`

export const NewPlayerInputSubmitButton = styled.button<{ disabled: boolean }>`
  display: inline-block;
  border: medium none;
  border-radius: 5px;
  padding: 2rem 3rem;
  cursor: pointer;
  text-transform: uppercase;
  margin-left: 0.5rem;
  width: 100%;
  color: #fee4c4;
  font-weight: bold;
  background-color: ${({ disabled }) => (disabled ? 'gray' : '#F57D7C')};

  &:hover {
    ${({ disabled }) =>
      disabled
        ? 'background-color: gray'
        : 'background-color: #7C79A2; color: #F57D7C;'}
  }
  @media ${device.mobileM} {
    margin-left: 0;
    margin-top: 0.5rem;
  }
`
