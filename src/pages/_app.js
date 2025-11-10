import React, { useEffect } from 'react';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import 'bootstrap/dist/css/bootstrap.min.css'
// Toastify CSS
import 'react-toastify/dist/ReactToastify.css';
// skeleton CSS
import 'react-loading-skeleton/dist/skeleton.css'
import '../scss/style.scss'

// import 'react-intl-tel-input/dist/main.css';
import 'react-phone-input-2/lib/style.css'
import { useRouter } from 'next/router';
import axios from "axios";
import Cookies from 'js-cookie';


export default function MyApp(props) {
  const [queryClient] = React.useState(() => new QueryClient())
  const { Component, pageProps } = props;
  const router = useRouter();

  let canonical = '';
  if (typeof window !== "undefined") {
    canonical = window.location.href;
  }
  useEffect(() => {
    let dir = router.locale === "en" ? "ltr" : "rtl";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", router.locale);
  }, [router.locale])


  axios.interceptors.request.use(function (config) {
    if (typeof window !== "undefined") {
      config.headers = {
        // 'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        'X-localization': Cookies.get('lang'),
        'Accept-Language': Cookies.get('lang'),
        transformRequest: []
      }
    }
    return config;
  });

  return (
    <>
      <Head>
        {/* <title>CCIT Solutions</title> */}
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/assets/images/ccit-fav.png" />
        <link rel="canonical" href={canonical} />
        <link rel="og:url" href={canonical} />
        
      </Head>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
      <Analytics />
    </>
  );
}


