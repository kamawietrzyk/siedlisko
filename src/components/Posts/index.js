import React from 'react'
import PostPreviewSmall from '../PostPreviewSmall'
import './index.scss'

const Posts = ({ slicedPosts }) => (
  <div className="Posts">
    {slicedPosts.map(({ title, pic, tag }, index) =>
      <PostPreviewSmall key={index} title={title} pic={pic} tag={tag} />)}
  </div>
)

export default Posts
