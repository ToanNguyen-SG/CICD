import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import 'antd/dist/antd.less'
import '../components/Layout.css'
import { useRouter } from 'next/router'

const AppLayout = dynamic(() => import('./layout'), { ssr: false })

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const currentLocation = router
  return (
    <AppLayout currentLocation={currentLocation}>
      <Head>
        <title>UXPON</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </AppLayout>
  )
}
