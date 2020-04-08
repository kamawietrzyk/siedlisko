import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import truncate from 'lodash/truncate'

const SeoContent = ({ title, description, url, image }) => {
  const truncatedDescription = truncate(description, { length: 164 })
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}

      {truncatedDescription && <meta name="description" content={truncatedDescription} />}
      {truncatedDescription && <meta name="og:description" content={truncatedDescription} />}

      {url && <meta property="og:url" content={url} />}
      {url && <link rel="canonical" href={url} />}

      {image && <meta property="og:image" content={image} />}
    </Helmet>
  )
}

SeoContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default SeoContent
