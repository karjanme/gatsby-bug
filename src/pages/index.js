import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const PageTitle = "Home"

const IndexPage = () => {
  return (
    <Layout>
      <h3>{PageTitle}</h3>
    </Layout>
  )
}

export const Head = () => <Seo title={PageTitle} />

export default IndexPage
