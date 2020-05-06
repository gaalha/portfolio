import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>
            Hello word! <span role="img" aria-label="hi">👋🏼</span>
        </h1>
        <p>
            This is my personal site, made with <b>Gatsby</b> <span role="img" aria-label="heart">💜</span>
        </p>
        <Link to="/page-2/">Go to other page</Link>
    </Layout>
)

export default IndexPage
