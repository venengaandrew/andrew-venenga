import Script from 'next/script';
import React, {memo,ReactNode} from 'react';

interface GoogleTagManagerProps {
    children?: ReactNode;
}

const GoogleTagManager: React.FC<GoogleTagManagerProps> = memo(({children}) => (
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
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-Q5ESPQFWD8"
            strategy="lazyOnload"
        />
        {children}
    </>
));

export default GoogleTagManager;