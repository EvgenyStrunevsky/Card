import styled from "styled-components";
import { MyTheme } from "../styles/Theme.styled";

export const Card = styled.div`
  max-width: 30%;
  min-width: 320px;
  background-color: ${MyTheme.colors.cardBackground};
  padding: 20px;
  border-radius: 20px;
  font-size: 16px;
`
export const Image = styled.div`
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 20px;
  img {
    max-width: 100%;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 2%;
`

export const Lid = styled.p`
  color: ${MyTheme.colors.lidColor};
  font-size: 16px;
  margin-bottom: 20px;
`

export const Buttons = styled.div`
  display: flex;
  justify-content:flex-start;
  gap: 5%;
  button {
    cursor: pointer;
  }
`