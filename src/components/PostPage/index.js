import React from 'react'
import { Link } from 'react-router-dom'
import URLS from '../../config/urls'
import './index.scss'
import PostPreviewSmall from '../PostPreviewSmall'

const PostPage = ({ post, related }) => {
  const { title, tag, pic, date, textLong } = post
  return (
    <div className="PostPage">
      <img src={pic} alt="pic1" width="100%" />
      <div className="PostPage__text">
        <p className="tag">{tag}</p>
        <h1>{title}</h1>
        <h3 className="text-muted">{date}</h3>
        <div>{textLong}</div>
        <div className="PostPage__button">
          <Link to={URLS.POSTS} className="btn btn-outline-dark">&laquo; Wróć do postów</Link>
        </div>
      </div>
      <div className="PostPage__suggestion">
        <h2>Może Cię zainteresować</h2>
        <div className="PostPage__suggestion--posts">
          {related.map((item, index) =>
            <PostPreviewSmall key={index} {...item} />
          )}
        </div>
      </div>
    </div>
  )
}

export default PostPage
