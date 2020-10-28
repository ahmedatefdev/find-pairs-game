import styled from 'styled-components'
import { size, spacing } from '../styles/vars';
import { IAppStyledProps } from "../IAppStyledProps";

export const MainTitle = styled.h1`
    text-align: center;
    color: ${({ theme }) => theme.text};
    margin: 0em ${spacing.normal};

    @media (max-width: ${size.tablet}){
        margin:0 ${spacing.small};
    }
`

export const SecTitle = styled.h2`
    color: ${({ theme }: IAppStyledProps) => theme.text};
    margin:0em;
`