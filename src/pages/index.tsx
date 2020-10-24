import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Options from '../components/Options'
import Page from '../components/Page'


export default function Home() {
  return (
    <>
      <Page >
        <Header />
        <Options />
        PageData
      </Page>
      <Footer />
    </>
  )
}
