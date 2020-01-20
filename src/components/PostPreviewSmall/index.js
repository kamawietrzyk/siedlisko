import React from 'react'
import './index.scss'

const PostPreviewSmall = ({ pic, title, tag }) => (
  <div className="PostPreviewSmall">
    <img src={pic} alt="pic-mini" />
    <div className="PostPreviewSmall__text">
      <h3>{title}</h3>
      <p className="tag">{tag}</p>
    </div>
  </div>
)

export default PostPreviewSmall
