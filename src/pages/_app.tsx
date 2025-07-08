import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import {SpeedInsights} from '@vercel/speed-insights/next';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        {/* Critical CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .critical-heading {
                opacity: 1 !important;
                transform: none !important;
              }
              /* Optimize CLS */
              * {
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
            `,
          }}
        />
        <meta content="initial-scale=1, width=device-width" name="viewport" />
        <title>Welcome!</title>
      </Head>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
});

MyApp.displayName = 'MyApp';
export default MyApp;