import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*,
::after,
::before {
    box-sizing: inherit;
}

.body {
    margin: auto; 
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.whisper};
    font-family: 'Poppins', sans-serif;
    padding: 0px 0px;
}
`