import React, { useState } from 'react'
import styled from 'styled-components'
import CardsContainer from '../components/Card/CardContainer'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Options from '../components/Options'
import Page from '../components/Page'
import { size, spacing } from '../styles/vars'
import { AppStyledProps } from '../types'

const IndexContainer = styled.div<{ showOptions: boolean }>`
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-direction:column;

    .Inner-Header{
      display:flex;
      justify-content:center;
      align-items:center;
      width:100%;
    }

    .Inner-content{
      display:flex;
      flex-direction:row;
      justify-content:center;
      
      .content{
        margin :${spacing.small};
        margin-top:0;
        max-width:${137 * 6}px;
      }

      .options{
        margin : ${spacing.extraSmall} ${spacing.small} ${spacing.small} ${spacing.small};
        padding : 0 ${spacing.normal};
      }
      @media (max-width: ${size.tablet}){
          .content{
            min-width: 100%;
          }
          .options{
            position:absolute;
            transition: 0.1s;
            top: ${spacing.extraLarge};
            margin-top:${spacing.extraLarge};
            visibility: ${({ showOptions }) => !showOptions ? "hidden" : "visible"};
            left: ${({ showOptions }) => showOptions ? "-5%" : "-100%"};
          }
      }
    }
`

const OptionNavButton = styled.button<{ showOptions: boolean }>`
      position: absolute;
      background-color:transparent;
      border:0;
      padding:0;
      top: 0px;
      left: 0px;
      visibility: hidden;
      
      align-self: flex-start;
      justify-self: baseline;
      margin: ${spacing.small} 0 0 ${spacing.small};
      img {
        width: 45px;
        height: 45px;
      }
      @media(max-width: ${size.tablet}) {
        visibility: visible;
      }
`

const GameData = styled.div`
      position:absolute;
      top: 0px;
      right: 0px;
      display:flex;
      flex-direction:column;
      align-items: center;
      justify-content: space-between;
      margin: ${spacing.small}  ${spacing.small} 0 0;
      visibility: hidden;
      & > * {
        margin:0;
      }

      @media(max-width: ${size.tablet}) {
        visibility: visible;
      }

`
const Index: React.FC<{ theme: "dark" | "light" }> = ({ theme }) => {
  const score = 2
  const scoreToWin = 10
  const tries = 5
  const [showOptions, setShowOptions] = useState(false)
  return (
    <>
      <Page >
        <IndexContainer showOptions={showOptions}>
          <OptionNavButton showOptions={showOptions} onClick={() => {
            setShowOptions(!showOptions)
          }}  ><img src={theme === "dark" ? "/favicons/listLight.svg" : "/favicons/listDark.svg"} alt="tap" /></OptionNavButton>
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
              <CardsContainer cardsData={[]} />
            </div>
            <div className="options">
              <Options />
            </div>
          </div>
          <Footer />
        </IndexContainer>
      </Page>
    </>
  )
}
export default Index