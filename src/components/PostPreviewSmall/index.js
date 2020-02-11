import React from 'react'
import URLS from '../../config/urls'
import { Link } from 'react-router-dom'
import { generatePath } from 'react-router'
import './index.scss'

const PostPreviewSmall = ({ pic, title, tag, path }) => (
  <div className="PostPreviewSmall">
    <Link to={generatePath(URLS.POST, { url: path })}><img src={pic} alt="pic-mini" width="100%"/></Link>
    <div className="PostPreviewSmall__text">
      <h3><Link className="PostPreviewSmall__header" to={generatePath(URLS.POST, { url: path })}>{title}</Link></h3>
      <p className="tag">{tag}</p>
    </div>
  </div>
)

export default PostPreviewSmall
