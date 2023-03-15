import styled from "styled-components";

export const TechListStyle = styled.ul`
  gap: 16px;
  display: flex;
  margin: 0 auto;
  background-color: var(--grey-50);
  width: 95%;
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
  padding: 20px 8px 20px 8px;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: var(--gray-100);
    border-radius: 4px;

    width: 98%;
    height: 48px;

    padding: 30px 30px 30px 30px;

  }

  li:hover{
    background-color: var(--grey-20);
  }

  h4 {
    color: var(--grey-0);
    font-size: var(--Text-2);
    font-weight: 700;
  }

  h5 {
    font-size: var(--Text-3);
    font-weight: 400;
    color: var(--grey-10);
  }
`;

export const TechListStyleDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 23px;

  p {
    color: var(--grey-0);

    max-width: 50%;
  }
`;
