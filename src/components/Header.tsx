import React from 'react'
import { Title } from '../Styled/Title'
import styled from 'styled-components'
import { spacing } from '../styles/vars'

const HeaderContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin:${spacing.normal};
    margin-top:0;
    `

const Header: React.FC<{}> = () => {
    return (
        <HeaderContainer>
            <img src="/images/mainLogo.svg" alt="Logo" width="50px" height="50px" />
            <Title>Find the Pairs</Title>
        </HeaderContainer>
    )
}

export default Header
