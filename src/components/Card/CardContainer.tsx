import React from 'react'
import styled from 'styled-components'
import { CardData } from '../../types'
import Card from './Card'

interface Props {
    cardsData: CardData[]
}

const Container = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-items:auto;
    justify-content:center;
    align-items:center;
    
`
const CardsContainer = (props: Props) => {
    return (
        <Container>
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
            <Card Visible={true} imageURL="ads" />
        </Container>
    )
}

export default CardsContainer
