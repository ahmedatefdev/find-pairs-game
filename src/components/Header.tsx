import React from 'react'
import { MainTitle } from '../Styled/Titles'
import styled from 'styled-components'
import { size, spacing } from '../styles/vars'

const HeaderContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin:${spacing.extraSmall} ${spacing.normal};
    
    @media (max-width: ${size.tablet}){
        margin: ${spacing.small};
        flex-direction:column;
    }
`

const Header: React.FC<{}> = () => {
    return (
        <HeaderContainer>
            <img src="/images/mainLogo.svg" alt="Logo" width="50px" height="50px" />
            <MainTitle>Find the Pairs</MainTitle>
        </HeaderContainer>
    )
}

export default Header
