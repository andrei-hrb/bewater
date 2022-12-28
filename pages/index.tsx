import Layout from './layout'
import { Session, unstable_getServerSession } from 'next-auth'
import authOptions from './api/auth/[...nextauth]'
import { GetServerSideProps } from 'next'

export default function Home({ user }) {
  return (
    <Layout title="Home" user={user}>
      ok
    </Layout>
  )
}

export const getServerSideProps : GetServerSideProps = async (context) => {
  const session : Session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  )

  return {
    props: {
      user: session.user,
    },
  }
}
