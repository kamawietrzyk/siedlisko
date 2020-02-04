import React from 'react'
import PostPreview from '../components/PostPreview'
import posts from '../config/posts'
import ScrollToTopOnMount from '../components/ScrollToTop'

const HomeView = () => {
  const preview = posts.slice(0, 5)

  return (
    <div className="container p-0">
      <ScrollToTopOnMount />
      {preview.map((item, index) =>
        <PostPreview key={index} flip={index % 2} {...item} />)}
    </div>
  )
}
export default HomeView
