import styled from 'styled-components'
import { size, spacing } from '../styles/vars';
import { AppStyledProps } from '../types';

export const MainTitle = styled.h1`
    text-align: center;
    color: ${({ theme }) => theme.text};
    margin: 0em ${spacing.normal};

    @media (max-width: ${size.tablet}){
        margin:0 ${spacing.small};
    }
`

export const SecTitle = styled.h2`
    color: ${({ theme }: AppStyledProps) => theme.text};
    margin:0em;
`