import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const PageTitle = "Page 1";

const Page1 = () => {
  return (
    <Layout>
        <h3>{PageTitle}</h3>
    </Layout>
  )
}

export const Head = () => <Seo title={PageTitle} />

export default Page1
