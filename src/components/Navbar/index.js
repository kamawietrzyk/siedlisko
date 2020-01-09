import React from 'react'
import './index.scss'

const Navbar = () => (
  <div className="Navbar">
    <nav className="nav justify-content-center">
      <a className="nav-link active" href="#">Główna</a>
      <a className="nav-link" href="#">Posty</a>
      <a className="nav-link" href="#">Perma... co?</a>
      <a className="nav-link" href="#">O nas</a>
      <a className="nav-link" href="#">Kontakt</a>
    </nav>
  </div>
)

export default Navbar
