import React from 'react'
import logo from './logo.svg'
import './index.scss'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import URLS from '../../config/urls'

const Header = () => (
  <div className="Header">
    <Link to={URLS.HOME}><img src={logo} alt="logo" height="180" /></Link>
    <hr />
    <Navbar />
  </div>
)

export default Header
