import React, { useState } from 'react'
import Posts from '../components/Posts'
import ScrollToTopOnMount from '../components/ScrollToTop'
import posts from '../../src/config/posts'
import Pagination from '../components/Pagination'

const PostsView = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const indexOfLastPost = currentPage * postsPerPage

  const indexOfFirstPost = indexOfLastPost - postsPerPage

  const slicedPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const onNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const onPrevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <div className="container p-0">
      <ScrollToTopOnMount />
      <Posts posts={slicedPosts} />
      <Pagination onNextPage={onNextPage} onPrevPage={onPrevPage} currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}
export default PostsView
