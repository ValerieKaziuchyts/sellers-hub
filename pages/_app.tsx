import React, { Fragment } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../components/application/Layout';
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";

import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../styles/theme';

import '../styles/globals.css';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const App: React.FC<MyAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  return (
    <Fragment>
      <Head>
        <title>Sellers Hub</title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CacheProvider value={emotionCache}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CacheProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
