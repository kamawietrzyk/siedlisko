import React from 'react'
import URLS from '../../config/urls'
import { Link } from 'react-router-dom'
import './index.scss'

const PostPreviewSmall = ({ pic, title, tag, path }) => (
  <div className="PostPreviewSmall">
    <Link to={URLS.POSTS + `/${path}`}><img src={pic} alt="pic-mini" /></Link>
    <div className="PostPreviewSmall__text">
      <h3><Link className="PostPreviewSmall__header" to={URLS.POSTS + `/${path}`}>{title}</Link></h3>
      <p className="tag">{tag}</p>
    </div>
  </div>
)

export default PostPreviewSmall
