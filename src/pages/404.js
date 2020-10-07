import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/post'

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404: Not found"
      url="https://edgarmejia.com/404"
      description=""
    />
    <Post>
      <Container>
        <ErrorCode>404</ErrorCode>
        <TitleText>Not found</TitleText>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Post>
  </Layout>
)

export default NotFoundPage

const Container = styled.div`
  text-align: center;
`
const ErrorCode = styled.p`
  font-size: 100px;
  font-weight: bold;
  margin: 0;
`

const TitleText = styled.p`
  font-size: 30px;
  font-weight: bold;
`
