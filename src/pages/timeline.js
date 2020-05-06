import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Timeline = () => (
  <Layout>
    <SEO title="My timeline" />
    <h1>My timeline</h1>
    <p>Welcome to my timeline, <b>this is a WIP</b></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Timeline
