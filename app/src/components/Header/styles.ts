import { styled } from "styled-components";

interface HeaderContainerProps {
  imgurl: string
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  width: 100vw;
  height: 350px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
  background-image: url(${props => props.imgurl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 115px;
  h1 {
    font-family: Coda, monospace;
    line-height: 160%;
    text-transform: uppercase;
    font-weight: 400;
  }
`