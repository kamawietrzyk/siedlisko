import React from 'react'
import PostPreviewSmall from '../PostPreviewSmall'
import './index.scss'

const Posts = ({ slicedPosts }) => (
  <div className="Posts">
    {slicedPosts.map((item, index) =>
      <PostPreviewSmall key={index} {...item} />)}
  </div>
)

export default Posts
