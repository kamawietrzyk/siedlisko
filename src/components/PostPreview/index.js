import React from 'react'
import { Link } from 'react-router-dom'
import { generatePath } from 'react-router'
import URLS from '../../config/urls'
import './index.scss'

const PostPreview = ({ flip = false, title, pic, textShort, date, tag, path }) => (
  <div className={`PostPreview bg-white ${flip && 'flipped'}`}>
    <Link to={generatePath(URLS.POST, { url: path })}><img src={pic} alt="pic" /></Link>
    <div className="PostPreview__text">
      <p className="tag">{tag}</p>
      <h2 className="pt-3"><Link className="PostPreview__header" to={generatePath(URLS.POST, { url: path })}>{title}</Link></h2>
      <h3 className="text-muted">{date}</h3>
      <p>{textShort}<Link to={generatePath(URLS.POST, { url: path })} className="read-more">&raquo;</Link>
      </p>
    </div>
  </div>
)

export default PostPreview
