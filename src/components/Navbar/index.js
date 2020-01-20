import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import URLS from '../../config/urls'
import './index.scss'

const tabs = [
  { name: 'glowna', label: 'GŁÓWNA', url: URLS.HOME },
  { name: 'posty', label: 'POSTY', url: URLS.POSTS },
  { name: 'permakultura', label: 'PERMA... CO?', url: URLS.PERMACULTURE },
  { name: 'o-nas', label: 'O NAS', url: URLS.ABOUT_US },
  { name: 'kontakt', label: 'KONTAKT', url: URLS.CONTACT }
]
const Navbar = ({ location }) => (
  <div className="Navbar">
    <nav className="nav justify-content-center">
      {tabs.map(({ name, label, url }) => (
        <Link
          key={name}
          to={url}
          role="tab"
          className={`nav-item nav-link ${url === location.pathname && 'active'}`}>
          {label}
        </Link>
      ))}
    </nav>
  </div>
)

export default withRouter(Navbar)
