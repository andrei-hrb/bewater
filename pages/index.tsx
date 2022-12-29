import { GetServerSidePropsContext } from 'next'
import { requireAuthenticated } from '../utils/middleware'
import Layout from './layout'
import Username from '../components/profile/Username'

export default function Home() {
  return (
    <Layout title="Home" auth={true}>
      ok
      <Username />
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
