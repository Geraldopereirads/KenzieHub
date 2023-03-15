import styled from "styled-components";

export const InputsRegisterStyle = styled.fieldset`

display: flex;
flex-direction: column;

padding: 10px;
gap: 5px;

label{
    color: var(--grey-0);
}

input{
    width: 260px;
    height: 38px;
    padding-left: 20px;
    background-color: var(--grey-20);
    color: var(--grey-10);
    border-radius: 3px;
}

p{
    color: var(--grey-0);
    font-size: var(--Text-3);
}
`