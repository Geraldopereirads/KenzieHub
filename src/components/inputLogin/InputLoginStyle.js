import styled from "styled-components";

export const InputLoginStyle = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding-left: 10px;

  gap: 10px;

  label {
    color: var(--grey-0);
    font-size: var(--Text-3);
    font-weight: 400;
  }
  input {
    width: 264px;
    height: 38px;

    padding-left: 20px;

    background-color: var(--grey-20);
    color: var(--grey-0);

    border-radius: 5px;
    border: solid 1px var(--grey-0);
  }

  p{
    color: var(--grey-0);
    font-size: var(--Text-3);
  }
`;
