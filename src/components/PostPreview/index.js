import React from 'react'
import { Link } from 'react-router-dom'
import URLS from '../../config/urls'
import './index.scss'

const PostPreview = ({ flip = false, title, pic, text, date, tag }) => (
  <div className={`PostPreview bg-white ${flip && 'flipped'}`}>
    <img src={pic} alt="pic" />
    <div className="PostPreview__text">
      <p className="tag">{tag}</p>
      <h2 className="pt-3">{title}</h2>
      <h3 className="text-muted">{date}</h3>
      <p>{text}<Link to={URLS.POST_ONE} className="read-more">&raquo;</Link>
      </p>
    </div>
  </div>
)

export default PostPreview
