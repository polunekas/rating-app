/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'
import '../styles/globals.css'
import React from 'react'

function MyApp({ Component, pageProps }:AppProps): JSX.Element {
  return <>
	<Head>
		<title>Mytop</title>
		<link rel="preconnect" href="https://fonts.googleapis.com"/>
		<link rel="preconnect" href="https://fonts.gstatic.com" />
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
	</Head>
		<Component {...pageProps} />
  </>
}

export default MyApp
