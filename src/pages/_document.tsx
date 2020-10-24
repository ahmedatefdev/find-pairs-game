import Document, { Head, Main, NextScript, Html } from 'next/document';
import React from 'react';

class FindPairsDocument extends Document {
    render() {
        return (
            <Html lang="en-US">
                <Head>
                    <link rel="manifest" href="/static/manifest.json" />
                    <meta name="mobile-web-app-capable" content="yes" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default FindPairsDocument;