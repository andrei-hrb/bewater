import { GetServerSidePropsContext } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { requireUnauthenticated } from '../../utils/middleware'
import { GoogleLogo, GithubLogo } from 'phosphor-react'
import Layout from '../layout'

export default function SignIn() {
  const [providers, setProviders] = useState(undefined)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getProviders()
      .then((data) => setProviders(data))
      .then(() => setLoading(false))
  }, [])

  return (
    <Layout title="Sign In" auth={false}>
      <div className="flex w-72 flex-col gap-5 fixed top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2">
        {!loading && (
          <>
            {Object.values(providers).map((provider) => (
              <div className="w-full" key={provider.name}>
                <button
                  className={`${
                    provider.id === 'google' ? 'bg-[#4285F4]' : 'bg-[#333]'
                  } py-4 px-6 flex gap-2 items-center mx-auto`}
                  onClick={() => signIn(provider.id)}
                >
                  {provider.id === 'google' ? (
                    <GoogleLogo weight="fill" size={26} />
                  ) : (
                    <GithubLogo weight="fill" size={26} />
                  )}
                  <span>
                    Sign in with{' '}
                    <span className="font-medium">{provider.name}</span>
                  </span>
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return requireUnauthenticated(context, () => {
    return {
      props: {},
    }
  })
}
