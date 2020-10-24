import styled from 'styled-components'
import { spacing } from '../styles/vars';

export const Title = styled.h1`
        text-align: center;
        color: ${({ theme }) => theme.text};
        margin: 0em ${spacing.normal};
    `