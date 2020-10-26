import React from 'react'
import getConfig from 'next/config'
import { Divider, Select, Button } from 'antd'
import styled from 'styled-components'
import { AppStyledProps } from '../types'
import { MainTitle, SecTitle } from '../Styled/Titles'
import { spacing } from '../styles/vars'
const { Option } = Select

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// Will only be available on the server-side
console.log(serverRuntimeConfig.mySecret)
// Will be available on both server-side and client-side
console.log(publicRuntimeConfig.staticFolder)

interface Props {

}
//  TODO: *Nav Options*     [2020-10-24 Sat]
/////    **       : Options Right
/////    ***       : Score now > En
/////    ***       : Brack
/////    ***       : pairs count and [restart Button]
//    **     SEC : *Nav*        [2020-10-24 Sat]
//    ***         : Options Top      
//    **          : *Animations*

const OptionsContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:${({ theme }: AppStyledProps) => theme.border};
    color:${({ theme }: AppStyledProps) => theme.text};
    padding:${spacing.normal};
    text-align:left;
    align-items:flex-start;
    border-radius:4px;
    width:max-content;
    & > *  {
        margin-bottom :${spacing.small};
        margin-top:0em;
    }
`
const OptionsInnerContainer = styled.div`
    display:flex;
    flex-direction: row;
            margin-bottom :${spacing.large};
    margin-top:0em;
    margin-left:${spacing.small};
     & > *  {
        margin:0em;
    }
`

const CurrentScore = styled.h1`
    color:${({ theme }: AppStyledProps) => theme.text};
 span {
    color:${({ theme }: AppStyledProps) => theme.accent};
}
`

const OptionsDivider = styled.hr`
    color:${({ theme }: AppStyledProps) => theme.text};
    background-color:${({ theme }: AppStyledProps) => theme.text};
    width:50%;
`

const Options = (props: Props) => {
    const score = 2
    const scoreToWin = 10
    const tries = 5
    const HandelRestart = () => { }
    return (
        <OptionsContainer>
            <SecTitle>Score</SecTitle>
            <OptionsInnerContainer>
                <CurrentScore>
                    <span>
                        {score + " "}
                    </span>
                      / {scoreToWin}
                </CurrentScore>
            </OptionsInnerContainer>
            <p>Tries: {tries}</p>
            <OptionsDivider />
            <SecTitle>Options</SecTitle>
            <OptionsInnerContainer>
                <p>Size &ensp; &ensp; &ensp;</p>
                <Select style={{ minWidth: "120px" }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
            </OptionsInnerContainer>
            <Button onClick={HandelRestart} type="primary" title="Restart">Restart</Button>
        </OptionsContainer>
    )
}

export default Options
