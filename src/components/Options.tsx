import React from 'react'
import { Select, Button } from 'antd'
import styled from 'styled-components'
import { SecTitle } from '../Styled/Titles'
import { spacing } from '../styles/vars'
import { useDispatch, useSelector } from 'react-redux'
import { setCards } from '../redux/actions/actions'
import { IAppStyledProps } from '../redux/types/IAppStyledProps'
import IState from '../redux/types/IState'
import { selectCurrentPairsCount, selectScore } from '../redux/reducers/score.reducer'
const { Option } = Select


interface Props {

}

const OptionsContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:${({ theme }: IAppStyledProps) => theme.border};
    color:${({ theme }: IAppStyledProps) => theme.text};
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
    color:${({ theme }: IAppStyledProps) => theme.text};
 span {
    color:${({ theme }: IAppStyledProps) => theme.accent};
}
`
const OptionsDivider = styled.hr`
    color:${({ theme }: IAppStyledProps) => theme.text};
    background-color:${({ theme }: IAppStyledProps) => theme.text};
    width:50%;
`

const GenerateParisOnions = () => {
    return (
        <Select style={{ minWidth: "120px" }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
        </Select>
    )
}
const Options = (props: Props) => {
    const score = useSelector(selectScore)
    const currentPairsCount = useSelector(selectCurrentPairsCount)
    const tries = useSelector((state: IState) => state.score.tries)
    const dispatch = useDispatch()

    return (
        <OptionsContainer>
            <SecTitle>Score</SecTitle>
            <OptionsInnerContainer>
                <CurrentScore>
                    <span>
                        {score + " "}
                    </span>
                      / {currentPairsCount}
                </CurrentScore>
            </OptionsInnerContainer>
            <p>Tries: {tries}</p>
            <OptionsDivider />
            <SecTitle>Options</SecTitle>
            <OptionsInnerContainer>
                <p>Size &ensp; &ensp; &ensp;</p>

                {
                    GenerateParisOnions()
                }
            </OptionsInnerContainer>
            <Button onClick={() => {
                dispatch(setCards())
            }} type="primary" title="Restart">Restart</Button>
        </OptionsContainer>
    )
}

export default Options
