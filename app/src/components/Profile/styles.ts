import { styled } from "styled-components";

export const ProfileContainer = styled.div`
  position: absolute;
  max-width: 864px;
  display: grid;
  grid-template-columns: 148px 1fr;
  gap: 20px;
  background-color: ${props => props.theme["base-profile"]};
  padding: 32px 40px;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
  top: 228px;
`

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 10px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    gap: 7px;
    text-decoration: none;
  }
`

export const ProfileNavBar = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`

export const NavBarItens = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`