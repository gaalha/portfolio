import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { IoIosCopy } from 'react-icons/io'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/post'

const PlaylistsPage = ({ data }) => {
  const { allGoogleSpreadsheetPlaylist: { edges: playlist } } = data
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Layout>
      <SEO
        title="Playlists for Discord"
        url="https://edgarmejia.com/playlist"
        description="Spotify and Apple Music"
      />
      <Post
        title="Playlists for Discord"
        date="2020-10-07"
        author="Edgar Mejía"
        tags={['Music']}
      >
        <>
          <div>
            <div className="anchor">
              {playlist.map(({ node }) => {
                const {
                  id,
                  nombre,
                  plataforma,
                  autor,
                  url,
                  portada,
                } = node

                // navigator.clipboard.writeText(url)

                return (
                  <div key={id} className="extension">
                    <img
                      src={portada || 'https://i.imgur.com/HzMJi5A.png'}
                      width="42"
                      height="42"
                      alt="Album cover"
                    />
                    <div className="extension-text">
                      <div className="upper">
                        <span className="bold">{nombre}</span>
                      </div>
                      <div className="down">
                        {plataforma ? `From ${plataforma}` : null} by {autor}
                      </div>
                    </div>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleClick}
                    >
                      <IoIosCopy />
                      <span>&nbsp;Link</span>
                    </Button>
                  </div>
                )
              })}
            </div>
          </div>

          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="URL copied to clipboard!"
            action={(
              <React.Fragment>
                <Button color="secondary" size="small" onClick={handleClose}>
                  dismiss
                </Button>
              </React.Fragment>
            )}
          />
        </>
      </Post>
    </Layout>
  )
}

PlaylistsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PlaylistsPage

export const query = graphql`
  query {
    allGoogleSpreadsheetPlaylist {
      edges {
        node {
          nombre
          plataforma
          url
          acortada
          autor
          portada
        }
      }
    }
  }
`
