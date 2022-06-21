import styled from 'styled-components';

export const Container = styled.div`

`;


export const TeslaAccountHeader = styled.div`
  padding: 7px 20px;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: white;
`;
export const TeslaAccountLogo = styled.div`

  a{
    img{
      object-fit: contain;
      width: 80px;
      filter: brightness(0) invert(1);
    }
  }
`;
export const TeslaAccountLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  a{
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 15px;
    text-transform: uppercase;
    z-index: 0;
  }
`;
export const TeslaAccountMenu = styled.div`
  z-index: 2;

  .TeslaAccountCloseMenu{
    color: black;
    cursor: pointer;
  }
`;


export const TeslaAccountInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 140px;
  padding-bottom: 30px;
`;
export const TeslaAccountPerson = styled.div`

  h4 {
  font-weight: 500;
  text-transform: capitalize;
  font-size: x-large;

  }
`;
export const TeslaAccountInfoRight = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #393c41;
    font-size: smaller;
    transition: all 0.3s;
    text-transform: capitalize;

    &:hover{
      color: black;
      font-weight: 500;
    }
  }
`;
export const TeslaAccountCar = styled.div`
  display: grid;
  place-items: center;
  gap: 30px;
  padding-bottom: 40px;
`;
