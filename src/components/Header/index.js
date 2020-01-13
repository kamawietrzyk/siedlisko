import React from 'react'
import logo from './logo.svg'
import './index.scss'
import Navbar from '../Navbar'

const Header = () => (
  <div className="Header">
    <img src={logo} alt="logo" height="180" />
    <hr />
    <Navbar />
  </div>
)

export default Header
