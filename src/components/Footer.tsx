import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import { spacing } from '../styles/vars'
import { AppTheme, AppStyledProps } from '../types'

interface Props {
    text?: string
}

const StyledFooter = styled.p`
    text-align:center;
    margin :${spacing.extraSmall};
    width:100%;
    color:${({ theme }: AppStyledProps) => theme.grey[600]};

`
const Footer = ({ text = "Created by Ahmed Atef ©2020" }: Props) => {
    return (
        <StyledFooter>
            {text}
        </StyledFooter>
    )
}

export default Footer
