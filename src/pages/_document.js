import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';



export default class MyDocument extends Document {
  render() {
    return (
      // lang="ar" dir='rtl'
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" id="manifest" />

          <meta name="theme-color" content="#fff" />



        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// font size landing ==> 25px
// logo langing 120px
// logo menu 100px
// achel l branch
// color l cate tb2a mn l back w color l price