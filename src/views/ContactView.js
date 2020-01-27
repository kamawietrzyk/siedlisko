import React from 'react'
import Contact from '../components/Contact'
import ScrollToTopOnMount from '../components/ScrollToTop'

const ContactView = () => (
  <div className="container p-0">
    <ScrollToTopOnMount />
    <Contact />
  </div>
)
export default ContactView
