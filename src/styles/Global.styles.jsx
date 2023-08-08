//create global styles

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* text-transform: uppercase; */
    /* font-family: 'Shantell Sans', cursive; */
}

body{
    font-size: 1rem;
    background-color: ${({theme})=> theme.colors.mainColor};
}

`;