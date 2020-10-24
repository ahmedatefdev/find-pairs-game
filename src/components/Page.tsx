import React from 'react'
import HEAD from 'next/head'
import GlobalStyle from './GlobalStyle'
import Header from './Header'

interface Props {
    children: any
    title?: string
    description?: string
}

///// DONE: Add header
/////    **       : Add Header
/////    **       : add mete data
/////    **       : add childe

const Page = ({ children, title = 'Find The Pairs', description = "This is a game based on finding pairs of the same image for all pictures to win the game" }: Props) => {
    return (
        <>
            <HEAD>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                {description && <meta content={description} name="description" />}
                <meta content="follow, index" name="robots" />
                <meta
                    content="/favicons/browserconfig.xml"
                    name="msapplication-config"
                />
                <link
                    href="/favicons/apple-touch-icon.png"
                    rel="apple-touch-icon"
                    sizes="180x180"
                />
                <link
                    href="/favicons/favicon-32x32.png"
                    rel="icon"
                    sizes="32x32"
                    type="image/png"
                />
                <link
                    href="/favicons/favicon-16x16.png"
                    rel="icon"
                    sizes="16x16"
                    type="image/png"
                />
                <link href="/favicons/site.webmanifest" rel="manifest" />
                <link href="/favicons/favicon.ico" rel="shortcut icon" />
                <link
                    as="style"
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap"
                    rel="preload"
                />
            </HEAD>
            <GlobalStyle />
            {children}
        </>
    )
}

export default Page
