import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Social from "../components/social"
import Avatar from "../components/avatar"
import SEO from "../components/seo"
import "../components/glitch.scss"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div style={{ width: 200 }}>
            <Avatar title="Edgar Mejía"/>
        </div>

        <Social />

        <h1>
            Hello word! <span role="img" aria-label="hi">👋🏼</span>
        </h1>

        <p>
            I'm <b>Edgar Mejía</b> a fullstack developer from El Salvador.
            <br />This is my personal site, made with <b>Gatsby</b> <span role="img" aria-label="heart">💜</span>
        </p>

        <section class="cray">
            <Link to="/projects/" className="cray-animation">My projects</Link>
            &nbsp;~&nbsp;
            <Link to="/timeline/" className="cray-animation">My timeline</Link>
        </section>

    </Layout>
)

export default IndexPage
