import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import { AppTheme, StyledProps } from '../types'

interface Props {
    text?: string
}

const StyledFooter = styled.p`
    position: absolute; 
    bottom: 0px; 
    text-align:center;
    margin :50px;
    /* display:block; */
    margin: 0;
    width:100%;
    padding-bottom:5px;
    color:${({ theme }: StyledProps) => theme.grey[600]};

`
const Footer = ({ text = "Created by Ahmed Atef ©2020" }: Props) => {
    return (
        <StyledFooter>
            {text}
        </StyledFooter>
    )
}

export default Footer
