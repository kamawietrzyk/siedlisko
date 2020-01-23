import React from 'react'
import { withRouter, useParams } from 'react-router-dom'
import PostPage from '../components/PostPage'
import posts from '../config/posts'
import ScrollToTopOnMount from '../components/ScrollToTop'

const PostPageView = () => {
  const { url } = useParams()
  const selectedPost = posts.find(post => post.path === url)
  const relatedPost = posts.slice(0, 3)

  return (
    <>
      <div className="container p-0">
        <ScrollToTopOnMount />
        <PostPage post={selectedPost} related={relatedPost}/>
      </div>
    </>
  )
}

export default withRouter(PostPageView)
