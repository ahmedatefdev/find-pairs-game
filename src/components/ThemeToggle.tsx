import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeTheme } from "../redux/actions/actions";
import IState from "../redux/types/IState";
import { SecTitle } from "../Styled/Titles";


const ModeContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width: 100%;
`
const ThemeToggle = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state: IState) => state.game.theme)
    return (
        <ModeContainer>
            <SecTitle>Theme</SecTitle>
            <DarkModeToggle
                onChange={() => dispatch(changeTheme())}
                checked={theme === "dark"}
                size={80}
            />
        </ModeContainer>
    )
}

export default ThemeToggle
