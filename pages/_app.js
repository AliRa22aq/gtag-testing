// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp


// import { useEffect } from 'react'
// import { useRouter } from 'next/router'

// import * as ga from '../lib/ga'

// function MyApp({ Component, pageProps }) {
//   const router = useRouter()

//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       ga.pageview(url)
//     }
//     //When the component is mounted, subscribe to router changes
//     //and log those page views
//     router.events.on('routeChangeComplete', handleRouteChange)

//     // If the component is unmounted, unsubscribe
//     // from the event with the `off` method
//     return () => {
//       router.events.off('routeChangeComplete', handleRouteChange)
//     }
//   }, [router.events])

//   return <Component {...pageProps} />
// }

// export default MyApp


import React, { useEffect } from "react";
import App from "next/app";

import { init } from "@socialgouv/matomo-next";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
console.log("MATOMO_URL: ", MATOMO_URL);

const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

