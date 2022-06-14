import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  position: sticky;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  padding-top: 15px;
`

export const HeaderLogo = styled.div``

export const HeaderImg = styled.img`
  object-fit: contain;
  flex: 1;
  width: 90px;
  margin-right: 100px;
`

export const HeaderLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    text-transform: uppercase;
    color: black;
    font-weight: 500;
    font-size: 15px;
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  a {
    text-transform: uppercase;
    color: black;
    font-weight: 500;
    font-size: 15px;
    z-index: 0;
    position: relative;
    visibility: ${(props) => props.visible ? 'hidden' : 'visible'};
  }
`

export const HeaderMenu = styled.div`

  MuiSvgIcon-root {
    position: relative;
    z-index: 2;
  }
`
