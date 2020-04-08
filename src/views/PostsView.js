import React, { useState } from 'react'
import Posts from '../components/Posts'
import ScrollToTopOnMount from '../components/ScrollToTop'
import posts from '../../src/config/posts'
import Pagination from '../components/Pagination'
import logo from '../components/Header/logo.svg'
import URLS from '../config/urls'
import SeoContent from '../components/SeoContent'

const APP_URL = process.env.REACT_APP_BASE_URL
const seo = {
  title: 'Wszystkie wpisy',
  description:
    'Tutaj znadziesz wszystkie nasze dotychczasowe wpisy, ale ostrzegamy - wchodzisz tu na własną odpowiedzialność!',
  url: `${APP_URL}${URLS.POSTS}/`,
  image: logo
}

const PostsView = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const indexOfLastPost = currentPage * postsPerPage

  const indexOfFirstPost = indexOfLastPost - postsPerPage

  const slicedPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const onPageChange = direction => () => {
    if (direction === 'next') {
      return setCurrentPage(currentPage + 1)
    }
    setCurrentPage(currentPage - 1)
  }

  return (
    <div className="container p-0">
      <ScrollToTopOnMount />
      <SeoContent {...seo} />
      <Posts posts={slicedPosts} />
      <Pagination onChange={onPageChange} currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}
export default PostsView
