import styled from "styled-components";

export const RegisterStyle = styled.main`
  background-color: var(--gray-100);

  div {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }

  img {
    width: 100px;
    height: 14px;
  }

  h1 {
    color: var(--grey-0);
    font-weight: 700;
    font-size: var(--Tittle-3);

    padding-top: 30px;
  }

  small {
    color: var(--grey-0);
    font-weight: 400;

    padding-top: 20px;
  }

  form {
    background-color: var(--grey-50);

    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 40px;
    padding-bottom: 30px;

    border-radius: 4px;

    margin: 10px;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  label {
    font-size: var(--Text-3);
    color: var(--grey-0);
  }

  select {
    width: 260px;
    height: 38px;

    padding-left: 20px;

    background-color: var(--grey-20);
    color: var(--grey-10);

    border-radius: 3px;
  }

  button {
    width: 260px;
    height: 38px;

    background-color: var(--Color-primary-negative);
    color: var(--grey-0);

    border-radius: 4px;

    margin-top: 15px;
  }

  button:hover {
    background-color: var(--Color-primary);
  }
`;

export const RegisterStyleContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 96px;

  padding-top: 60px;
  width: 100%;

  a {
    color: var(--grey-0);
    background-color: var(--grey-50);
    border-radius: 4px;

    width: 79px;
    height: 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-decoration: none;
  }

  a:hover{
    background-color: var(--grey-20);
  }
`;
