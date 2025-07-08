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

      {/* Analytics scripts with performance optimization */}
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                t=l.createElement(r);
                t.async=1;
                t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "kmvelopnio");
          `,
        }}
        id="ms-clarity"
        strategy="lazyOnload"
      />

      {/* Google Analytics tag */}
      

      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
});

MyApp.displayName = 'MyApp';
export default MyApp;