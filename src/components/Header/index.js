import React from 'react'
import logo from './logo.svg'
import './index.scss'
import Navbar from '../Navbar'

const Header = () => (
  <div className="header">
    <img src={logo} className="logo" alt="logo" height="180" />
    <hr className="line-center"/>
    <Navbar />
  </div>
)

export default Header
