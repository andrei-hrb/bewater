import { GetServerSidePropsContext } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'

export const requireAuthenticated = async (
  context: GetServerSidePropsContext,
  cb: any
) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  )

  if (!session) {
    return {
      redirect: {
        destination: '/auth/singin',
        permanent: false,
      },
    }
  }

  return cb()
}

export const requireUnauthenticated = async (
  context: GetServerSidePropsContext,
  cb: any
) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  )

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return cb()
}
