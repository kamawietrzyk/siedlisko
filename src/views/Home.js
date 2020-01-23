import React from 'react'
import PostPreview from '../components/PostPreview'
import posts from '../config/posts'
import ScrollToTopOnMount from '../components/ScrollToTop'

const HomeView = () => {
  const preview = posts.slice(0, 5)

  return (
    <div className="container p-0">
      <ScrollToTopOnMount />
      {preview.map(({ title, pic, textShort, date, tag }, index) =>
        <PostPreview key={index} flip={index % 2} title={title} pic={pic} textShort={textShort} date={date} tag={tag} />)}
    </div>
  )
}
export default HomeView
