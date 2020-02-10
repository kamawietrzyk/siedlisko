import React from 'react'
import PostPreviewSmall from '../PostPreviewSmall'
import './index.scss'

const Posts = ({ posts }) => (
  <div className="Posts">
    {posts.map((item, index) =>
      <PostPreviewSmall key={index} {...item} />)}
  </div>
)

export default Posts
