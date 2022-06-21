import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  Container,
  TeslaAccountCar,
  TeslaAccountHeader,
  TeslaAccountInfo,
  TeslaAccountInfoRight,
  TeslaAccountLinks,
  TeslaAccountLogo,
  TeslaAccountMenu,
  TeslaAccountPerson,
} from './styles'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './../../features/userSlice'
import Car from '../Car'
import { auth } from '../../firebase'

function TeslaAccount({ setIsMenuOpen, isMenuOpen }) {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const history = useHistory()

  const logoutOfApp = () => {
    auth.signOut().then(() => {
      dispatch(logout())
      history.push('/')
    }).catch((error) => alert(error.message))
  }

  return (
    <Container>
      <TeslaAccountHeader>
        <TeslaAccountLogo>
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt="Logo"
            />
          </Link>
        </TeslaAccountLogo>

        <TeslaAccountLinks>
          <Link to="/teslaaccount">Modal S</Link>
          <Link to="/teslaaccount">Modal 3</Link>
          <Link to="/teslaaccount">Modal X</Link>
          <Link to="/teslaaccount">Modal Y</Link>
          <Link to="/teslaaccount">Solar Roof</Link>
          <Link to="/teslaaccount">Solar Panels</Link>
          <Link to="/teslaaccount">Shop</Link>
          <Link to="/teslaaccount">Tesla Account</Link>
          <Link onClick={logoutOfApp}>Log out</Link>
          <TeslaAccountMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <CloseIcon className="TeslaAccountCloseMenu" />
            ) : (
              <MenuIcon />
            )}
          </TeslaAccountMenu>
        </TeslaAccountLinks>
      </TeslaAccountHeader>

      <TeslaAccountInfo>
        <TeslaAccountPerson>
          <h4>{user?.displayName + "'s"} Tesla</h4>
        </TeslaAccountPerson>
        <TeslaAccountInfoRight>
          <Link>Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link onClick={logoutOfApp}>Sign out</Link>
        </TeslaAccountInfoRight>
      </TeslaAccountInfo>
      <TeslaAccountCar>
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          model="model S"
          testDrive
        />
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          model="model X"
        />
      </TeslaAccountCar>
    </Container>
  )
}

export default TeslaAccount
