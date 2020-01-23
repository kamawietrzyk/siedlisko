import React from 'react'
import AboutUs from '../components/AboutUs'
import ScrollToTopOnMount from '../components/ScrollToTop'

const AboutUsView = () => (
  <>
    <div className="container">
      <ScrollToTopOnMount />
      <AboutUs />
    </div>
  </>
)

export default AboutUsView
