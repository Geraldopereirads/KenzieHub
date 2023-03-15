import styled from "styled-components";

export const LoginStyle = styled.main`
  padding-top: 80px;
  background-color: var(--gray-100);

  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 300px;
    height: auto;

    background-color: var(--grey-50);

    margin-top: 20px;
    padding-bottom: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    border-radius: 10px;
  }

  h2 {
    text-align: center;
    padding-top: 33px;

    color: var(--grey-0);
    font-size: var(--Tittle-4);
    font-weight: 700;
  }

  button {
    width: 259px;
    height: 38px;

    background-color: var(--Color-primary-negative);
    color: var(--grey-0);

    border-radius: 8px;
    margin-left: 9px;
  }

  button:hover {
    background-color: var(--Color-primary);
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    text-decoration: none;
  }

  small {
    color: var(--grey-10);
  }

  small:hover {
    border-bottom: solid 1px var(--grey-10);
  }

  span {
    background-color: var(--grey-10);
    color: var(--grey-0);

    width: 259px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    border: none;
  }

  span:hover {
    background-color: var(--grey-20);
  }
`;
