import React from 'react'
import { useSelector } from 'react-redux'
import styled, { css, keyframes } from 'styled-components'
import { selectScore } from '../redux/reducers/score.reducer'
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
const innerContainerAnimation = keyframes`
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
        }
    }  
    75% {
        width: 50%;
        height: 50%;
        font-size:large;
        @media(max-width: ${size.tablet}) {
            width: 90%;
        }
    }  
    80%{
        width: 60%;
        height: 60%;
        @media(max-width: ${size.tablet}) {
            width: 100%;
        }
    }
    90%{
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
    width:100vh;
    height:100vh;
    top:0;
    left:0;
    visibility:hidden;
    animation: ${({ winGame, animationTiming }) => {
        return winGame ? css`${winGameAnimationOuter} ${animationTiming}  ease-in-out  forwards` : '';
    }};
    .inner_text{
        font-size:smaller;
        width: 0%;
        height: 0%;
        text-align:center;
        display:flexbox;
        align-items:center;
        justify-content:center;
        background-color: ${({ theme }: IAppStyledProps) => theme.accent};
        animation: ${({ winGame, animationTiming }) =>
        winGame ? css`${innerContainerAnimation} ${animationTiming} ease-in-out  forwards` : ''};
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
