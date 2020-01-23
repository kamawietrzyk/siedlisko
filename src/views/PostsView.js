import React from 'react'
import Posts from '../components/Posts'
import ScrollToTopOnMount from '../components/ScrollToTop'

const PostsView = () => (
  <div className="container p-0">
    <ScrollToTopOnMount />
    <Posts />
  </div>
)
export default PostsView
