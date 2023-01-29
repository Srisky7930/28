import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.isTheme ? '#ffffff' : '#181818')};
  width: 20vw;
  height: 100vh;
`

export const LinkCard = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;
`

export const Home = styled.p`
  margin-left: 10px;
`
