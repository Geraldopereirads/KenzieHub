import styled from "styled-components";

export const UpdateTechModalsStyle = styled.div`
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

  form {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  label {
    font-size: 0.563rem;
    padding: 10px;

    color: var(--grey-0);
  }

  input {
    width: 250px;
    height: 34px;

    border-radius: 3px;

    background-color: var(--grey-rgba-1);
    color: var(--grey-rgba-2);

    padding-left: 10px;
    margin-left: 6px;
  }

  select {
    width: 250px;
    height: 34px;

    border-radius: 3px;

    background-color: var(--grey-rgba-1);
    color: var(--grey-rgba-2);

    padding-left: 10px;
    margin-left: 6px;
  }
`;

export const UpadateTechAll = styled.div`
  width: 280px;
  background-color: var(--grey-50);

  border-radius: 3px;
`;

export const UpadateTechHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  background-color: var(--grey-rgba-1);
  border-radius: 3px;

  h2 {
    font-size: var(--Text-3);
    color: var(--grey-rgba-3);
  }

  span {
    font-size: var(--Text-3);
    color: var(--grey-rgba-2);

    cursor: pointer;
  }
`;

export const DivButtonsTech = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 15px;
  gap: 10px;
`;

export const ButtonTechsOne = styled.button`
  width: 160px;
  height: 34px;

  background-color: var(--Color-primary-negative);
  color: var(--grey-0);

  font-size: var(--Text-3);

  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--Color-primary-50);
  }
`;
export const ButtonTechsTwo = styled.button`
  width: 70px;
  height: 34px;

  background-color: var(--grey-rgba-2);
  color: var(--grey-0);

  font-size: var(--Text-3);

  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--grey-20);
  }
`;
