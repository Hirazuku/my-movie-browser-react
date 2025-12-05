import styled, { css } from "styled-components";

export const SectionGrid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 40px;
    margin: 15px 0;
    box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.twine};;
    font-size: 25px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        padding: 5px;
        grid-template-columns: 1fr;
    }
`

export const SectionImage = styled.img`
    width: 288px;
    height: 384px;
    display: flex;
    justify-content: center;
    margin: auto;
   
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 80%;
        max-width: 80%;
        margin: auto;
    }
`

export const SectionContent = styled.header`
    font-size: 22px;
`

export const SectionTitle = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 24px;
`

export const SectionYear = styled.div`
    font-size: 22px;
`

export const SectionTags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;
    margin: 24px 0px;
`

export const SectionTag = styled.li`
    background-color: ${({ theme }) => theme.colors.twine};
    padding: 8px 16px;
    font-size: 14px;
    margin: 8px;
    margin-left: 0;
`

export const SectionDescription = styled.p`
    font-size: 20px;
    margin: 24px 0px;
    line-height: 1.6;
`