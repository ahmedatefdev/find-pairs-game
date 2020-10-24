import { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from "../styles/vars"

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Component {...pageProps} themeToggler={themeToggler} />
    </ThemeProvider >
  )
}

export default MyApp
