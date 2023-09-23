import Script from 'next/script';
import React, {memo,ReactNode} from 'react';
import ReactGA from 'react-ga';

import PageViewTracker from './PageViewTracker';

interface GoogleTagManagerProps {
    children?: ReactNode;
  }
  const GoogleTagManager: React.FC<GoogleTagManagerProps> = memo(({children}) => {
    ReactGA.initialize('GTM-NVFKZMDS'); // Replace 'GTM-XXXX' with your actual GTM Container ID
    return (
      <>
        {/* Paste the GTM code snippets here */}
        {/* Replace 'GTM-XXXX' with your actual GTM Container ID */}
        {/* Google Tag Manager (head) */}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-NVFKZMDS"
          strategy="lazyOnload"
        />
        {/* End Google Tag Manager (head) */}
        {/* Google Tag Manager (body) */}
        <noscript>
          <iframe
            height="0"
            src="https://www.googletagmanager.com/ns.html?id=GTM-NVFKZMDS"
            style={{display: 'none', visibility: 'hidden'}}
            width="0"
          />
        </noscript>
        {/* End Google Tag Manager (body) */}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q5ESPQFWD8"
          strategy="lazyOnload"
        />
        <Script id="ga-script" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q5ESPQFWD8');
          `}
        </Script>
        {/* End Google Analytics */}
        {children}
      </>
    );
  });
  export default GoogleTagManager;