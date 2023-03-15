import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    border: none;
    font-family: 'Inter', sans-serif;
}

button {
    cursor: pointer;
}

a{
    cursor: pointer;
}

:root{
    --Color-primary: #FF577F;
    --Color-primary-50: #FF427F;
    --Color-primary-negative: #59323F;


    --gray-100: #121214;
    --grey-50: #212529;
    --grey-20: #343B41;
    --grey-10: #868E96;
    --grey-0: #F8F9FA;
    --grey-opacity: rgba(21, 25, 29, 0.75);
    --grey-rgba-1: rgba(52, 59, 65, 1);
    --grey-rgba-2: rgba(134, 142, 150, 1);
    --grey-rgba-3: rgba(248, 249, 250, 1);
    --grey-rgba-4: rgba(52, 59, 65, 1);


    --Negative: #E83F5B;
    --Warning: #FFCD07;
    --Sucess: #3FE864;
    --Information: #155BCB;


    --Tittle-1: 1.625rem;
    --Tittle-2: 1.375rem;
    --Tittle-3: 1.125rem;
    --Tittle-4: 0.875rem;


    --Text-1: 1.625rem;
    --Text-2: 0.875rem;
    --Text-3: 0.75rem;

    
}


`