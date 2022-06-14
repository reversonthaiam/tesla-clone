import React, { useState } from 'react'
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
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'
import Signup from './Components/Signup'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const user = useSelector(selectUser)

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
          {user ? <Redirect to='/teslaaccount' /> : <Login />}
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
