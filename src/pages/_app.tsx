import App from 'next/app';
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from "../styles/vars"

import * as React from 'react';
import makeStore from '../redux/Store';

export interface IAppProps {
  store: any
}
export interface IAppState {
  theme: 'light' | 'dark'
}
class MyApp extends App<IAppProps, {}, IAppState> {
  static async getInitialProps({ Component, ctx }) {
    //Preload from the server side
    ctx.store.dispatch({
      type: 'reducerA/setCounter',
      payload: 10
    });
    return {
      pageProps: {
        ...(Component.getInitialProps ? await
          Component.getInitialProps(ctx) : {})
      }
    }
  }

  themeToggler = () => {
    this.setState({ ...this.state, theme: this.state.theme === 'light' ? 'dark' : 'light' })
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
          <Component {...pageProps} themeToggler={this.themeToggler} />
        </ThemeProvider >
      </Provider>

    );
  }
}

export default withRedux(makeStore, { debug: true })(App);



