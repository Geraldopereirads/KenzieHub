import styled from "styled-components";

export const HomePageStyle = styled.main`
  background-color: var(--gray-100);

  min-height: 100vh;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid var(--grey-50);
    padding: 30px 57px 30px 57px
  }

  

  div {
  }

  h2 {
    color: var(--grey-0);
    font-size: var(--Tittle-3);
  }

  small {
    color: var(--grey-0);
    font-size: var(--Text-3);
  }
`;

export const ButtonSair = styled.button`
  color: var(--grey-0);
  background-color: var(--grey-50);
  border-radius: 4px;

  width: 55px;
  height: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  &:hover {
    background-color: var(--grey-20);
  }

`;

export const BorderHomeDiv = styled.div`
  border-bottom: 1px solid var(--grey-50);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 10px;
  padding: 30px 57px 30px 57px

`;

export const DivOpenModal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 57px 30px 57px;

  span {
    color: var(--grey-0);
    font-weight: 600;
    font-size: var(--Tittle-3);
  }
`;

export const AdicionarModal = styled.div`
  padding: 0px;
  margin: 0px;

  width: 32px;
  height: 32px;
  background-color: var(--grey-50);
  cursor: pointer;

  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--grey-rgba-2);
  }

  img {
    cursor: pointer;
    text-align: center;
  }
`;

export const ImgLogoHome = styled.img`
  width: 100px;
  height: 14px;
`;
