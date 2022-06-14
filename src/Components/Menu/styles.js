import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  overflow: scroll;
  top: 0;
  bottom: 0;
  right: 0;
  padding-left: 20px;
  padding-top: 70px;
  padding-bottom: 20px;
  padding-right: 20px;
  background-color: white;
  display: flex;
  z-index: 1;
  flex-direction: column;
  gap: 25px;
  min-width: 280px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
