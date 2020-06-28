import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Navigation from './navigation'
import { toKebabCase } from '../helpers'
import style from '../styles/post.module.css'

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
    <div className={`${style.post} ${style.onIndex} mt-1 mb-5 p-md-5`}>
      <div className={style.postContent}>
        <h1 className={style.title}>
          {excerpt ? <Link to={path}># {title}</Link> : title}
        </h1>
        <div className={style.meta}>
          {date} {author && <>— Written by {author}</>}
          {tags ? (
            <div className={style.tags}>
              {tags.map(tag => (
                <Link to={`/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
                  <span className={style.tag}>#{tag}</span>
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <Navigation
            previousPath={previousPath}
            previousLabel={previousLabel}
            nextPath={nextPath}
            nextLabel={nextLabel}
          />
        </>
      </div>
    </div>
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
