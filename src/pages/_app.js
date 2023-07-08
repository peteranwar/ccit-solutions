import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";

import Cookies from 'js-cookie';


import '../scss/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'react-intl-tel-input/dist/main.css';

// skeleton CSS
import 'react-loading-skeleton/dist/skeleton.css'



import axios from 'axios';

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


export default function MyApp(props) {
  const [queryClient] = React.useState(() => new QueryClient())
  const { Component, pageProps } = props;


  return (
    <>
      <Head>
        <title>CCIT Solutions</title>

        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name="description" content="" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/assets/images/ccit-fav.png" />
      </Head>

       {/* <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Hydrate state={pageProps.dehydratedState}>  */}
          <Component {...pageProps} />
         {/* </Hydrate>
      </QueryClientProvider>  */}

    </>
  );
}


