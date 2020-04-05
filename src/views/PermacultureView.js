import React from 'react'
import Permaculture from '../components/Permaculture'
import ScrollToTopOnMount from '../components/ScrollToTop'
import SeoContent from '../components/SeoContent'
import URLS from '../config/urls'
import perma from '../components/Permaculture/perma.jpg'

const seo = {
  title: 'Permakultura - co to takiego?',
  description:
    '"Permakultura to interdyscyplinarna nauka i szkoła projektowania trwałych, zrównoważonych ekosystemów" - to najbardziej zwięzła definicja, jaką poznaliśmy.',
  url: URLS.PERMACULTURE,
  image: perma
}

const PermacultureView = () => (
  <div className="container p-0">
    <ScrollToTopOnMount />
    <SeoContent {...seo} />
    <Permaculture />
  </div>
)
export default PermacultureView
