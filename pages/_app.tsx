import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => { require("bootstrap/dist/js/bootstrap.bundle.min.js"); }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>spcode.pl</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
