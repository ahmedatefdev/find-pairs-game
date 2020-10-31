import App, { AppProps } from 'next/app';
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from 'styled-components'
import * as React from 'react';
import { darkTheme, lightTheme } from '../styles/vars';
import { wrapper } from '../redux/Store';
import IState from '../redux/types/IState';

// export interface IAppProps extends AppProps {
//   store: any
// }
// export interface IAppState {
// }
// // class MyApp extends App<IAppProps, {}, IAppState> {
// //   render() {
// //     const { Component, pageProps, store } = this.props;
// //     return (
// //       <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
// //         <Component {...pageProps} />
// //       </ThemeProvider >

// //     );
// //   }
// // }


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
// export default MyApp



