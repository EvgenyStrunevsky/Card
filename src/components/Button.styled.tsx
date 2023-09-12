import styled, { css } from "styled-components";
import { MyTheme } from "../styles/Theme.styled";

type ButtonPropTypes = {
  background?: string
  color?: string
  outline?: boolean
}

export const Button = styled.button<ButtonPropTypes>`
  ${props => props.outline && css<ButtonPropTypes>`
    border: 3px solid ${MyTheme.colors.buttonOutline};
  `}
  background: ${props => props.background};
  color: ${props => props.color};
  padding: 10px 20px;
  border-radius: 7px;
  width: 35%;
  min-width: 100px;
`