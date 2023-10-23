import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />        
      </Head> 
      <body>
        <Main/>
        <NextScript />
        <Script
             src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
             strategy="beforeInteractive"
        />
      </body>
    </Html>
  )
}
