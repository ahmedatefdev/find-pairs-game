import React from 'react'
import { useSelector } from 'react-redux'
import styled, { css, keyframes } from 'styled-components'
import { selectScore } from '../redux/reducers/Score'
import { IAppStyledProps } from '../redux/types/IAppStyledProps'
import IState from '../redux/types/IState'
import { size } from '../styles/vars'
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const animationTime = publicRuntimeConfig.restTimeAfterWin;

const winGameAnimationOuter = keyframes`
    0% { visibility:visible; }  
    100% { visibility:hidden; }
`
const innerContainerAnimationLargeScreen = keyframes`
    0%{
        font-size:0em;
    }
    20% {
        width: 60%;
        height: 60%;
        font-size:larger;
        @media(max-width: ${size.tablet}) {
            width: 100%;
        }
        
    }  
    40% {
        width: 50%;
        height: 50%;
        font-size:large;
        @media(max-width: ${size.tablet}) {
            width: 90%;
            height: 30%;
        }
    }  
    75% {
        width: 50%;
        height: 50%;
        font-size:large;
        @media(max-width: ${size.tablet}) {
            width: 90%;
            height: 30%;
        }
    }  
    80%{
        width: 60%;
        height: 60%;
        @media(max-width: ${size.tablet}) {
            width: 100%;
        }
    }
    100%{
        width: 0%;
        height: 0%;
        font-size:0em;

    }
`
const innerContainerAnimationSmallScreen = keyframes`
    0%{
        font-size:0em;
    }
    20% {
        width: 100%;
        height: 40%;
        font-size:larger;
    }  
    40% {
        width: 95%;
        height: 30%;
        font-size:large;
    }  
    75% {
        width: 95%;
        height: 30%;
        font-size:large;
    }  
    80%{
        width: 100%;
        height: 40%;
        font-size:larger;
    }
    100%{
        width: 0%;
        height: 0%;
        font-size:0em;

    }
`
const OuterContainer = styled.div<{ winGame: Number, animationTiming: string }>`
    position:absolute;
    background-color:transparent;
    display:flex;
    align-items:center;
    justify-content:center;
    width:100vw;
    height:100vh;
    top:0;
    left:0;
    visibility:hidden;
    animation: ${({ winGame, animationTiming }) => {
        return winGame ? css`${winGameAnimationOuter} ${animationTiming}  ease-in-out  forwards` : '';
    }};
    .inner_text{
        border-radius:1em;
        font-size:smaller;
        width: 0%;
        height: 0%;
        text-align:center;
        display:flexbox;
        align-items:center;
        justify-content:center;
        background-color: ${({ theme }: IAppStyledProps) => theme.accent};
        animation: ${({ winGame, animationTiming }) =>
        winGame ? css`${innerContainerAnimationLargeScreen} ${animationTiming} ease-in-out  forwards` : ''};
    }
    @media(max-width: ${size.tablet}) {
      
        .inner_text{
        animation: ${({ winGame, animationTiming }) =>
        winGame ? css`${innerContainerAnimationSmallScreen} ${animationTiming} ease-in-out  forwards` : ''}; 
        }
    }
`

const WinGame = () => {
    const winGame = useSelector((state: IState) => state.game.winGame)
    return (
        <OuterContainer winGame={Number(winGame)} animationTiming={`${animationTime}s`}>
            <p className="inner_text">
                YOU WIN
                <br />
                Restarting the game...
            </p>
        </OuterContainer>
    )
}

export default WinGame
