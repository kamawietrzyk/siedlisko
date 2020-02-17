import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import logoSmall from './logoSmall.svg'
import './index.scss'
import URLS from '../../config/urls'

const tabs = [
  { name: 'glowna', label: 'Główna', url: URLS.HOME },
  { name: 'posty', label: 'Posty', url: URLS.POSTS },
  { name: 'permakultura', label: 'Perma... co?', url: URLS.PERMACULTURE },
  { name: 'o-nas', label: 'O nas', url: URLS.ABOUT_US },
  { name: 'kontakt', label: 'Kontakt', url: URLS.CONTACT }
]

const Footer = () => (
  <>
    <div className="Footer">
      <Link to={URLS.HOME}><img src={logoSmall} alt="footer-logo"/></Link>
      <div className="Footer__nav">
        {tabs.map(({ name, label, url }) =>
          <Link
            to={url}
            key={name}
            className="Footer__link">
            {label}
          </Link>
        )}
      </div>
      <div>
        <a href="https://www.facebook.com/tomtomlittlewind" target="_blank" rel="noopener noreferrer" className="Footer__icon text-muted"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="https://www.instagram.com/_kamykowe_/" target="_blank" rel="noopener noreferrer" className="Footer__icon text-muted"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href={URLS.CONTACT} className="Footer__icon text-muted"><FontAwesomeIcon icon={faEnvelope} /></a>
      </div>
    </div>
    <div className="text-center pt-2 pb-1 text-muted">
      <small>Copyright &copy; 2020 Kama Swoboda-Wietrzyk.<br/> All rights reserved.</small>
    </div>
  </>
)

export default Footer
