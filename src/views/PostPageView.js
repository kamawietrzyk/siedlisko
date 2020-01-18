/* eslint-disable no-console */
import React from 'react'
import { withRouter, useParams } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import PostPage from '../components/PostPage'
import posts from '../config/posts'

const PostPageView = () => {
  const { url } = useParams()
  const selectedPost = posts.find(post => post.path === url)

  return (
    <>
      <div className="container p-0">
        <ScrollToTop />
        <PostPage selectedPost={selectedPost} />
      </div>
    </>
  )
}

export default withRouter(PostPageView)
