import React from 'react'
import PostPreview from '../components/PostPreview'
import posts from '../config/posts'
import ScrollToTopOnMount from '../components/ScrollToTop'
import SeoContent from '../components/SeoContent'
import URLS from '../config/urls'
import logo from '../../src/components/Header/logo.svg'

const APP_URL = process.env.REACT_APP_BASE_URL
const seo = {
  title: 'Siedlisko Góra Wiatrów - permakultura | natura | ekologia',
  description:
    'Blog o permakulturze w życiu i w użyciu. Swobodna pisanina o naturze i ekologii, wynużenia o nas i luźne przemyślenia na tematy różne.',
  url: `${APP_URL}${URLS.HOME}/`,
  image: logo
}

const HomeView = () => {
  const preview = posts.slice(0, 5)

  return (
    <div className="container p-0">
      <ScrollToTopOnMount />
      <SeoContent {...seo} />
      {preview.map((item, index) =>
        <PostPreview key={index} flip={index % 2} {...item} />)}
    </div>
  )
}
export default HomeView
