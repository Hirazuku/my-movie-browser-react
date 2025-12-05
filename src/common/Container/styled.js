import styled from "styled-components";

export const StyledContainer = styled.main`
    max-width: 1368px;
    margin: auto;
    padding: 20px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.whisper};
    font-family: "Poppins", sans-serif;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 20px ;
    }
`