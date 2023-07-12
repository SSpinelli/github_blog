import { Avatar, InfoContainer, NameContainer, NavBarItens, ProfileContainer, ProfileNavBar } from "./styles";
import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import { GithubLogo, Suitcase, UsersThree, ArrowSquareOut } from "phosphor-react"

export function Profile() {
  const { user } = useContext(BlogContext)

  return (
    <ProfileContainer>
        <Avatar src={user.avatar_url} width={148} />
        <InfoContainer>
          <NameContainer>
            <h2>João Gabriel Soriano Spinelli</h2>
            <a href={user.html_url}>
              <span>Github</span>
              <ArrowSquareOut size={20} weight="fill" />
            </a>
          </NameContainer>
          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
          <ProfileNavBar>
            <NavBarItens>
              <GithubLogo size={20} weight="fill" />
              <span>{user.login}</span>
            </NavBarItens>
            <NavBarItens>
              <Suitcase size={20} weight="fill" />
              <span>{user.company}</span>
            </NavBarItens>
            <NavBarItens>
              <UsersThree size={20} weight="fill" />
              <span>{user.followers} Seguidores</span>
            </NavBarItens>
          </ProfileNavBar>
        </InfoContainer>
    </ProfileContainer>
  )
}