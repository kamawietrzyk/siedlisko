import React from 'react'
import { withRouter, useParams } from 'react-router-dom'
import PostPage from '../components/PostPage'
import posts from '../config/posts'
import ScrollToTopOnMount from '../components/ScrollToTop'
import SeoContent from '../components/SeoContent'

const PostPageView = () => {
  const { url } = useParams()
  const selectedPost = posts.find(post => post.path === url)
  const relatedPost = posts.slice(0, 3)

  const APP_URL = process.env.REACT_APP_BASE_URL
  const seo = {
    title: selectedPost.title,
    description: selectedPost.textShort,
    url: `${APP_URL}${selectedPost.path}`,
    image: selectedPost.pic
  }

  return (
    <>
      <div className="container p-0">
        <ScrollToTopOnMount />
        <SeoContent {...seo} />
        <PostPage post={selectedPost} related={relatedPost}/>
      </div>
    </>
  )
}

export default withRouter(PostPageView)
