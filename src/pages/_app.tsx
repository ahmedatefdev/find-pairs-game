import App, { AppProps } from 'next/app';
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components'
import * as React from 'react';
import { darkTheme, lightTheme } from '../styles/vars';
import { wrapper } from '../redux/Store';

export interface IAppProps extends AppProps {
  store: any
}
export interface IAppState {
  theme: 'light' | 'dark'
}
class MyApp extends App<IAppProps, {}, IAppState> {

  constructor(params: any) {
    super(params)
    this.state = {
      theme: "dark"
    }
  }

  themeToggler = () => {
    this.setState({ ...this.state, theme: this.state.theme === 'light' ? 'dark' : 'light' })
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
        <Component {...pageProps} themeToggler={this.themeToggler} theme={this.state.theme} />
      </ThemeProvider >

    );
  }
}
export default wrapper.withRedux(MyApp);
// export default MyApp



