import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Timeline from "../components/timeline/Timeline"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Timeline />
  </Layout>
)

export default IndexPage
