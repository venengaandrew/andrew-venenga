import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import Head from "next/head";
import Script from "next/script";
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
        <title>Welcome!</title>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MSSPKY60PN"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;