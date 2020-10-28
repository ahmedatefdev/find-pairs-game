import React from 'react'
import styled from 'styled-components'
import { device, spacing } from '../../styles/vars'
import { MainTitle } from '../../Styled/Titles'
import ICardData from '../../redux/types/ICardData'
import { useDispatch, useSelector } from 'react-redux'
import IState from '../../redux/types/IState'
import { IAppStyledProps } from '../../redux/types/IAppStyledProps'
import { selectCardByOrder } from '../../redux/actions/cards.action'

interface Props {
    cardData: ICardData
}



const FlipCard = styled.div<{ rotate?: number, order: number, hideCard: boolean }>`
    cursor: pointer;
    background-color: transparent;
    width: max-content;
    height:max-content;
    perspective: 1000px;
    margin: ${spacing.extraSmall};
    order:  ${({ order }) => order};
    transition: opacity 0.2s ease-out;
    .flip-card-inner {   
        position: relative;
        width: 100%;
        transition: transform 0.6s ease-out;
        height: 100%;
        text-align: center;
        transform-style: preserve-3d;
        
        .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
        }

        .flip-card-front {
            background-color: #bbb;
            color: black;
            transform: rotateY(180deg);
            
        }
         
        .flip-card-back {
            background-color:  ${({ theme }: IAppStyledProps) => theme.accent};
            border-radius:0.3em;
            display:flex;
            justify-content:center;
            align-items:center;
        }

        &, .flip-card-front img, .flip-card-back  {
            border-radius:0.3em;
            width: 90px;
            height: 100px;
            @media ${device.tablet}, ${device.desktopL}, ${device.laptopL}, ${device.desktop}, ${device.laptop}  {
                width: 137px;
                height: 145px;  
            }
            visibility: visible;
            
        }
              
    }

        
    opacity:${({ hideCard }) => hideCard ? "0%" : "100%"};
    .flip-card-inner {
        transform: ${({ rotate }) => rotate ? `rotateY(180deg)` : `rotateY(0)`};
    }
`

const Card = ({ cardData }: Props) => {
    const { hidden, selected, imgURL, order } = cardData
    const { showCards: showCards } = useSelector((state: IState) => ({ showCards: state.game.showCards }))
    const dispatch = useDispatch()
    const HandelCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        if (hidden || selected) return;
        dispatch(selectCardByOrder(cardData))
    }
    return (
        <FlipCard rotate={Number(selected) | Number(showCards)} onClick={
            HandelCardClick} order={order} hideCard={hidden}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={imgURL} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                    <MainTitle>?</MainTitle>
                </div>
            </div>
        </FlipCard>
    )
}

export default Card
