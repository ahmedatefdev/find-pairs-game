import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AppStyledProps } from '../../types'
import { device, spacing } from '../../styles/vars'
import { MainTitle } from '../../Styled/Titles'

interface Props {
    imageURL: string
    Visible: Boolean
}


const FlipCard = styled.div<{ rotate?: number }>`
    background-color: transparent;
    width: max-content;
    height:max-content;
    perspective: 1000px;
    margin: ${spacing.extraSmall};

    /* @media  ${device.mobileL} {
        width: 90px;
        height: 100px
    } */
    .flip-card-inner {   
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
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
            background-color:  ${({ theme }: AppStyledProps) => theme.accent};
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
            
        }
              
    }

        
 .flip-card-inner {
        /* transform: rotateY(180deg); */
        transform: ${({ rotate }) => rotate ? `rotateY(180deg)` : `rotateY(0)`};
    }
`
const Card = (props: Props) => {
    const [rotate, setRotate] = useState(0)
    useEffect(() => {
        setRotate(Math.random() * 10 > 5 ? 1 : 0)
    }, [])
    return (
        <FlipCard rotate={rotate}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="Avatar" />
                </div>
                <div className="flip-card-back">
                    <MainTitle>?</MainTitle>
                </div>
            </div>
        </FlipCard >
    )
}

export default Card
