import Document, { Head, Html, Main, NextScript } from 'next/document';



export default class MyDocument extends Document {
  render() {
    return (
      // lang="ar" dir='rtl'
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" id="manifest" />

          <meta name="theme-color" content="#fff" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />


          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Prompt:wght@400;500;600;700&display=swap" rel="stylesheet" />

          <meta property="og:image" content="/assets/images/ccit-bg.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="120" />
          <meta property="og:image:height" content="70" />
          <meta property="og:image:alt" content="We Transform Ideas Into Digital Products" />

          <meta property="og:description"
            content="CCIT IS A SOFTWARE ENGINEERING COMPANY, Accelerate your project with a high-performing team of software engineers." />

          <meta property="og:site_name" content="CCIT" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@CCIT" />
          <meta name="twitter:title" content="CCIT Solutions" />
          <meta name="twitter:description"
            content="CCIT IS A SOFTWARE ENGINEERING COMPANY, Accelerate your project with a high-performing team of software engineers." />
          <meta name="twitter:image" content="/assets/images/ccit-bg.png" />
          <meta name="keywords" content="ccit, software, Ideas, Digital Products, develop , design, software engineers, Mobile Development
, Desktop Development, Web Development,Product Development,UI/UX Design, Cloud Consulting, React, Next js, Laravel, PHP, node js, front end, back end, full stack, react native
 , mobile app development, web development, cloud computing, AI, Machine Learning, Data Science, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS, Blockchain, Cryptocurrency, FinTech, AI, ML, DS
" />

          <meta name="description"
            content="CCIT IS A SOFTWARE ENGINEERING COMPANY, Accelerate your project with a high-performing team of software engineers." />


          <link rel="canonical" href="https://www.ccit.sa/" />


          <link rel="alternate" href="https://www.ccit.sa/" hrefLang="x-default" />
          <link rel="alternate" href="https://www.ccit.sa/ar" hrefLang="ar" />

          {/* <link rel="next" href="https://www.ccit.sa/our-works" />
          <link rel="prev" href="https://www.ccit.sa/" /> */}


          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "CCIT Solutions",
                "url": "https://www.ccit.sa/",
                "logo": "https://www.ccit.sa/assets/images/ccit-bg.png",
                "sameAs": [
                  "https://www.linkedin.com/company/ccit-company/",
                  "https://x.com/ccitsolutions?s=21&t=ZoiOedFzXxVjFrgJaDbZWA",
                  "https://www.instagram.com/ccit_solutions/?igsh=MTZsa2xxZDdqZmV0dg%3D%3D",
                  "https://github.com/ccitsa991"
                ]
              }
          `}
          </script>

          {/* <!-- Google tag (gtag.js) --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XNCM3KKNRX"></script>
          {/* <script dangerouslySetInnerHTML={{
            __html: () => {
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());

              gtag('config', 'G-XNCM3KKNRX');
            }
          }} /> */}

          <script dangerouslySetInnerHTML={{
            __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XNCM3KKNRX');
  `
          }} />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
