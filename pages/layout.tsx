import {
  HeaderAuthenticated,
  HeaderUnauthenticated,
} from '../components/layout/header/Header'
import Head from 'next/head'

import { Montserrat } from '@next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Layout({ title, auth, children }) {
  const htmlTitle = `${title} | BeWater`

  return (
    <>
      <Head>
        <title>{htmlTitle}</title>
        <meta
          name="description"
          content="Meet your daily water needs with your friends"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={montserrat.className}>
        {auth ? <HeaderAuthenticated /> : <HeaderUnauthenticated />}
        {children}
      </main>
    </>
  )
}
