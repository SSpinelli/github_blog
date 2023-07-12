import { styled } from "styled-components";

export const CardContainer = styled.div`
  background-color: ${props => props.theme["base-post"]};
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border-color: ${props => props.theme["base-border"]};
    transition: border-color 0.2s;
  }
`

export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 283px 1fr;
  span {
    margin-top: 7px;
  }
`