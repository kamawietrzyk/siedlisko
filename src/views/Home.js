import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import PostPreview from '../components/PostPreview'

const posts = [
  { title: "dupa" },
  { title: "dupa2" }
]

const HomeView = () => (
  <>
    <div className="container p-0">
      <ScrollToTop />
      {posts.map((post, index) => <PostPreview key={index} flip={index % 2} title={post.title} />)}
    </div>
  </>
)

export default HomeView
