import App, { AppProps } from 'next/app';
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from "../styles/vars"
import * as React from 'react';
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
  static async getInitialProps({ Component, ctx }) {
    const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps: appProps };
  }

  themeToggler = () => {
    this.setState({ ...this.state, theme: this.state.theme === 'light' ? 'dark' : 'light' })
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      // <Provider store={store}>
      <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
        <Component {...pageProps} themeToggler={this.themeToggler} theme={this.state.theme} />
      </ThemeProvider >
      // </Provider>

    );
  }
}
export default wrapper.withRedux(MyApp);
// export default MyApp



