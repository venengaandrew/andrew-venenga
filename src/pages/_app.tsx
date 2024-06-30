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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-MSSPKY60PN', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(c,l,a,r,i,t,y){
                    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                    t=l.createElement(r);
                    t.async=1;
                    t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];
                    y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "kmvelopnio");`,
          }}
        />
        ;<title>Welcome!</title>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-MSSPKY60PN" strategy="afterInteractive" />
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
});

export default MyApp;
