import React from 'react'
import styled from 'styled-components'
import ICardData from '../../redux/types/ICardData'
import Card from './Card'

interface Props {
    cardCount: number
    randomCardsData: ICardData[]
}

const Container = styled.div`
    display:flex;
    flex-direction: row;    
    flex-wrap:wrap;
    justify-items:auto;
    justify-content:center;
    align-items:center;
`

const GenerateCards = (randomCardsData: ICardData[]) => {
    return randomCardsData.map(({ imgURL, order, hidden, selected }, i) =>
        <Card cardData={{ imgURL: "images/" + imgURL, order, hidden, selected }} key={i} />
    )
}
const CardsContainer = ({ randomCardsData }: Props) => {
    return (
        <Container>
            {GenerateCards(randomCardsData)}
        </Container>
    )
}

export default CardsContainer
