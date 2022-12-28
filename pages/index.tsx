import { GetServerSidePropsContext } from 'next'
import { requireAuthenticated } from '../utils/middleware'
import Layout from './layout'

export default function Home() {
  return (
    <Layout title="Home" auth={true}>
      ok
    </Layout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return requireAuthenticated(context, () => {
    return {
      props: {},
    }
  })
}
