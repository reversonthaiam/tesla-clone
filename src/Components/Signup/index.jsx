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
  SignupDivider,
  SignupHeader,
  SignupInfo,
  SignupLanguage,
  SignupLogo,
} from './styles'

function Signup() {
  const [email, setEmail] = useState('')
  const [fName, setfName] = useState('')
  const [lName, setlName] = useState('')
  const [password, setPassoword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const signUp = (e) => {
    e.preventDefault()

    if (!fName) return alert('Please enter a first name!')
    if (!lName) return alert('Please enter a last name!')
    if (!email) return alert('Please enter a e-mail!')
    if (!password) return alert('Please enter a password!')

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: fName,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.fName,
              }),
            )

            history.push('/teslaaccount')
          })
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <Container>
      <SignupHeader>
        <SignupLogo>
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt="Logo"
            />
          </Link>
        </SignupLogo>

        <SignupLanguage>
          <LanguageOutlinedIcon />
          <span>en-US</span>
        </SignupLanguage>
      </SignupHeader>

      <SignupInfo>
        <h1>Create account</h1>
        <Form>
          <label htmlFor="fName">Fist name</label>
          <input
            type="text"
            id="fName"
            value={fName}
            onChange={(e) => setfName(e.target.value)}
          />

          <label htmlFor="lName">Last name</label>
          <input
            type="text"
            id="lName"
            value={lName}
            onChange={(e) => setlName(e.target.value)}
          />

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
            name="Create account"
            type="submit"
            onClick={signUp}
          ></ButtonPrimary>
        </Form>

        <SignupDivider>
          <hr /> <span>OR</span> <hr />
        </SignupDivider>

        <Link to="/login">
          <ButtonSecondary name="Sign in"></ButtonSecondary>
        </Link>
      </SignupInfo>
    </Container>
  )
}

export default Signup
