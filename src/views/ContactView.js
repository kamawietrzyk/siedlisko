import React from 'react'
import Contact from '../components/Contact'
import ScrollToTopOnMount from '../components/ScrollToTop'
import contact from '../components/Contact/kontakt.jpg'
import URLS from '../config/urls'
import SeoContent from '../components/SeoContent'

const seo = {
  title: 'Kontakt',
  description:
    'Odezwij się do nas!',
  url: URLS.CONTACT,
  image: contact
}

const ContactView = () => (
  <div className="container p-0">
    <ScrollToTopOnMount />
    <SeoContent {...seo} />
    <Contact />
  </div>
)
export default ContactView
