import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  HeaderImg,
  HeaderLogo,
  HeaderLinks,
  HeaderRight,
  HeaderMenu,
} from './styles'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Header({ setIsMenuOpen, isMenuOpen }) {
  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <HeaderImg
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt="Logo"
          />
        </Link>
      </HeaderLogo>
      <HeaderLinks>
        <Link to="/">Modal S</Link>
        <Link to="/">Modal 3</Link>
        <Link to="/">Modal X</Link>
        <Link to="/">Modal Y</Link>
        <Link to="/">Solar Roof</Link>
        <Link to="/">Solar Panels</Link>
      </HeaderLinks>
      <HeaderRight visible={isMenuOpen}>
        <Link to="/">Shop</Link>
        <Link to="/login">Tesla Account</Link>
        <HeaderMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </HeaderMenu>
      </HeaderRight>
    </Container>
  )
}

export default Header
