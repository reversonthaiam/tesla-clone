import styled from 'styled-components'

export const Container = styled.div`
  padding: 25px;
  padding-top: 15px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 70px;
`

export const LoginHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
`

export const LoginLogo = styled.div`
  a {
    img {
      object-fit: contain;
      width: 90px;
    }
  }
`

export const LoginLanguage = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 15px;
  transition: all 0.2s;

  span {
    font-weight: 500;
  }

  &:hover {
    background-color: hsla(0, 0%, 50.2%, 0.125);
  }
`

export const LoginInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 330px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-weight: 500;
    font-size: 40px;
    margin-left: -60px;

  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: #5c5c62;
    font-weight: 500;
    font-size: 15px;
    padding-left: 20px;
    padding-bottom: 10px;
  }

  input {
    margin-bottom: 30px;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    outline: none;
    border-radius: 50px;
    padding: 12px 20px;
    color: #393c41;
    font-weight: 600;

    &:focus{
      border: 1px solid #d6d6d6;
      transition: all 0.2s;
    }
  }

`
export const LoginDivider = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  hr {
    width: 40%;
    height: 0;
    opacity: 0.3;
    margin-top: 7px;
  }

  span{
    font-weight: 500;
    color: #5c5e62;
  }
`;
