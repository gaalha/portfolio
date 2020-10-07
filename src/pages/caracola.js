import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const CaracolaPage = ({ data }) => {
  const random_boolean = Math.random() >= 0.5
  const caracol = random_boolean ? data.caracolaSi : data.caracolaNo

  return (
    <Layout>
      <SEO title="404: Not found" />
      <SEO
        title="¿Qué dice la caracola mágica?"
        coverImage={caracol}
        url="https://edgarmejia.com/caracola"
      />
      <h2>¿Qué dice la caracola mágica?</h2>
      <Img fixed={caracol.childImageSharp.fixed} />
    </Layout>
  )
}

CaracolaPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const postsQuery = graphql`
  query {
    caracolaSi: file(relativePath: { eq: "caracola_si.png" }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    caracolaNo: file(relativePath: { eq: "caracola_no.jpeg" }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default CaracolaPage
