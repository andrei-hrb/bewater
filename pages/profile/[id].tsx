import Layout from "../layout"

export default function Profile({id}) {
  return (
    <>
      <Layout title="profile">
        <>
          {id}
        </>
      </Layout>
    </>
  )
}