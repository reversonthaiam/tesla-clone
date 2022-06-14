import React, { useState } from 'react'
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined'
import ButtonPrimary from '../Layout/ButtonPrimary'
import ButtonSecondary from '../Layout/ButtonSecondary'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import {
  Container,
  Form,
  LoginDivider,
  LoginHeader,
  LoginInfo,
  LoginLanguage,
  LoginLogo,
} from './styles'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassoword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const signIn = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            displayName: userAuth.user.displayName,
            uid: userAuth.user.uid,
          }),
        )
        history.push('/teslaaccount')
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <Container>
      <LoginHeader>
        <LoginLogo>
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt="Logo"
            />
          </Link>
        </LoginLogo>

        <LoginLanguage>
          <LanguageOutlinedIcon />
          <span>en-US</span>
        </LoginLanguage>
      </LoginHeader>

      <LoginInfo>
        <h1>Sign in</h1>
        <Form>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassoword(e.target.value)}
          />

          <ButtonPrimary
            name="Sign In"
            type="submit"
            onClick={signIn}
          ></ButtonPrimary>
        </Form>

        <LoginDivider>
          <hr /> <span>OR</span> <hr />
        </LoginDivider>

        <Link to="/signup">
          <ButtonSecondary name="Create account"></ButtonSecondary>
        </Link>
      </LoginInfo>
    </Container>
  )
}

export default Signup
