import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Avatar from "../components/avatar"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div style={{width: 200}}>
            <Avatar />
        </div>

        <br/>
        <h1>
            Hello word! <span role="img" aria-label="hi">👋🏼</span>
        </h1>

        <p>
            I'm <b>Edgar Mejía</b> a fullstack developer from El Salvador.
            <br/>This is my personal site, made with <b>Gatsby</b> <span role="img" aria-label="heart">💜</span>
        </p>

        <Link to="/projects/">My projects</Link> ~ <Link to="/timeline/">My timeline</Link>
    </Layout>
)

export default IndexPage
