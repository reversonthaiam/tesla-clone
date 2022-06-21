import React, { useEffect, useState } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles'
import Header from './Components/Header'
import Menu from './Components/Menu'
import HeaderBlock from './Components/HeaderBlock'
import Login from './Components/Login'
import { login, logout, selectUser } from './features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import Signup from './Components/Signup'
import TeslaAccount from './Components/TeslaAccount'
import { auth } from './firebase'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          }),
        )
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Header
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
          ></Header>
          {isMenuOpen && <Menu />}
          <HeaderBlock />
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/teslaaccount" /> : <Login />}
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/teslaaccount">
          {!user ? (
            <Redirect to="/login" />
          ) : (
            <>
              <TeslaAccount
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
              {isMenuOpen && <Menu />}
            </>
          )}
        </Route>
      </Switch>
    </Router>
  )
}

export default App
