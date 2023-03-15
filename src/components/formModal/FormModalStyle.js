import styled from "styled-components";

export const ModalStyle = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  background-color: var(--grey-opacity);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const FormStyleModal = styled.fieldset`
  background-color: var(--grey-50);

  width: 300px;
  height: 315px;
`;

export const CloseModalStyle = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: var(--grey-20);

  padding: 15px;

  h2 {
    font-size: var(--Text-2);
  }
  span {
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    color: var(--grey-10);
    font-size: var(--Tittle-4);

    cursor: pointer;
  }
`;
export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  width: 300px;

  label {
    font-weight: 400;
    color: var(--grey-0);
    font-size: var(--Text-3);

    padding-top: 10px;
  }

  input {
    height: 48px;

    padding-left: 20px;

    border-radius: 4px;

    background-color: var(--grey-20);
    color: var(--grey-0);

    border: solid 2px var(--grey-0);
  }

  select {
    height: 48px;

    padding-left: 20px;

    border-radius: 4px;

    background-color: var(--grey-20);
    color: var(--grey-0);

    border: solid 2px var(--grey-0);
  }

  button {
    height: 48px;
    margin: 0 auto;
    width: 260px;
    background-color: var(--Color-primary-negative);
    color: var(--grey-0);
    margin-top: 10px;

    border-radius: 4px;
  }


  button:hover{
    background-color: var(--Color-primary-50);

  }
`;
