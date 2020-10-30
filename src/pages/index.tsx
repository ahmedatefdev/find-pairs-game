import React, { useEffect, useState } from 'react'
import CardsContainer from '../components/Card/CardContainer'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Options from '../components/Options'
import Page from '../components/Page'
import { useDispatch, useSelector } from 'react-redux'
import IState from '../redux/types/IState'
import { IndexContainer, OptionNavButton, GameData } from '../Styled/IndexStyled'
import ICardsState from '../redux/types/ICardsState'
import { setCards } from '../redux/actions/actions'
import WinGame from '../components/WinGame'

interface IProps {
  theme: "dark" | "light"
  cardsData: ICardsState
}

const Index = (props: IProps) => {
  const { cards } = useSelector<IState, IState>(state => state);
  const [showOptions, setShowOptions] = useState(false)
  const dispatch = useDispatch()

  const score = 2
  const scoreToWin = 10
  const tries = 5

  useEffect(() => {
    dispatch(setCards())
  }, [])

  return (
    <>
      <Page >
        <IndexContainer showOptions={showOptions}>
          <OptionNavButton showOptions={showOptions} onClick={() => {
            setShowOptions(!showOptions)
          }}  ><img src={props.theme === "dark" ? "/favicons/listLight.svg" : "/favicons/listDark.svg"} alt="tap" /></OptionNavButton>
          <GameData>
            <p>score:&ensp;
                    <span>
                {score + " "}
              </span>
                    / {scoreToWin}
            </p>
            <p>tries: {tries}</p>
          </GameData>
          <Header />
          <div className="Inner-content">
            <div className="content"  >
              <CardsContainer cardCount={10} randomCardsData={cards.cardsData} />
            </div>
            <div className="options">
              <Options />
            </div>
          </div>
          <Footer />
        </IndexContainer>
        <WinGame />
      </Page>
    </>
  )
}



export default Index