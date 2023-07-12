import { HeaderContainer, LogoContainer } from "./styles";
import cover from '../../assets/Cover.svg'
import logo from '../../assets/terminal-solid 1.svg'
import { Profile } from "../Profile";

export function Header () {
  return (
    <HeaderContainer imgurl={cover}>
      <LogoContainer>
        <img src={logo} alt="" />
        <h1>Spinelli's Blog</h1>
      </LogoContainer>
      <Profile />

    </HeaderContainer>
  )
}