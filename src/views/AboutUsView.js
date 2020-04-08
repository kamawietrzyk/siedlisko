import React from 'react'
import AboutUs from '../components/AboutUs'
import ScrollToTopOnMount from '../components/ScrollToTop'
import us from '../components/AboutUs/ryjki.jpg'
import URLS from '../config/urls'
import SeoContent from '../components/SeoContent'

const APP_URL = process.env.REACT_APP_BASE_URL
const seo = {
  title: 'O nas',
  description:
    'Nazywamy się Kama i Tomek Wietrzyk. Jesteśmy dobrymi przyjaciółmi od stu lat, zakochaną parą od trzynastu, a od ostatnich sześciu - szczęśliwym małżeństwem.',
  url: `${APP_URL}${URLS.ABOUT_US}/`,
  image: us
}

const AboutUsView = () => (
  <>
    <div className="container p-0">
      <ScrollToTopOnMount />
      <SeoContent {...seo} />
      <AboutUs />
    </div>
  </>
)

export default AboutUsView
