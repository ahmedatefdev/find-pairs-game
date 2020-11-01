import { AppProps } from 'next/app';
import { useSelector } from "react-redux";
import { ThemeProvider } from 'styled-components'
import React from 'react';
import { darkTheme, lightTheme } from '../styles/vars';
import { wrapper } from '../redux/Store';
import IState from '../redux/types/IState';


const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  const theme = useSelector((state: IState) => state.game.theme)
  return (
    <ThemeProvider theme={theme ? theme === 'light' ? lightTheme : darkTheme : lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider >

  );
}


export default wrapper.withRedux(MyApp);