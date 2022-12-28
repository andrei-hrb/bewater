import Header from '../components/layout/header/Header'
import Head from 'next/head'

import { Montserrat } from '@next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Layout({ title, user, children }) {
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
        <Header user={user} />
        {children}
      </main>
    </>
  )
}
