import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  border-top: 1px solid #d0d1d2;

`;

export const CarImage = styled.div`

  img {
    object-fit: fit;
    width: 1000px;
  }
`;
export const CarModel = styled.div`
  font-weight: 500;
  font-size: xx-large;
  margin-top: -180px;
  text-transform: capitalize;
`;
export const CarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: -40px;

  button {
    width: 230px;
    margin-bottom: 30px;

  }
`;
export const CarInfo = styled.div`
  max-width: 350px;
  text-align: center;
  font-size: smaller;
  line-height: 1.5;
  font-weight: 500;
  color: #393c41;

  span {
    color: #3e6be2;
    cursor: pointer;
  }
`;
