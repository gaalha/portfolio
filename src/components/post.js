import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Navigation from './navigation'
import { toKebabCase } from '../helpers'

const Post = ({
  title,
  date,
  path,
  author,
  excerpt,
  tags,
  html,
  previousPost,
  nextPost,
}) => {
  const previousPath = previousPost && previousPost.frontmatter.path
  const previousLabel = previousPost && previousPost.frontmatter.title
  const nextPath = nextPost && nextPost.frontmatter.path
  const nextLabel = nextPost && nextPost.frontmatter.title

  return (
    <PostContontainer className="mt-1 mb-5 p-md-5">
      <Title>
        {excerpt ? <Link to={path}># {title}</Link> : title}
      </Title>

      <Meta>
        {date} {author && <>— Written by {author}</>}
        {tags ? (
          <Tags>
            {tags.map(tag => (
              <Link to={`/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
                <Tag>#{tag}</Tag>
              </Link>
            ))}
          </Tags>
        ) : null}
      </Meta>

      <>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Navigation
          previousPath={previousPath}
          previousLabel={previousLabel}
          nextPath={nextPath}
          nextLabel={nextLabel}
        />
      </>
    </PostContontainer>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  author: PropTypes.string,
  excerpt: PropTypes.string,
  html: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  previousPost: PropTypes.object,
  nextPost: PropTypes.object,
}

export default Post

const PostContontainer = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: left;
  padding: 20px;
  margin: 0 auto 20px;
  position: relative;

  @media (max-width: 900px) {
    max-width: 660px;
  }

  h1 {
    font-size: 30px;
    margin: 0 0 10px;
  }

  img {
    border-radius: 8px;
  }

  border-radius: 5px;
  background-color: #fafafa;

  .dark & {
    background: #252527;
  }
`

const Title = styled.h1`
  a {text-decoration: none;}
`

const Meta = styled.div`
  font-size    : 1rem;
  margin-bottom: 30px;
`

const Tags = styled.div`
  margin-top: 10px;
`

const Tag = styled.span`
  display: inline-block;
  margin-right: 10px;
  background-color: #fe5186;
  border-radius: 5px;
  padding: 2px 4px;
  color: #ffffff;
`
