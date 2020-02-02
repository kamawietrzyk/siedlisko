import React from 'react'
import './index.scss'

const Pagination = ({ onNextPage, onPrevPage }) => (
  <div className="Pagination">
    <nav aria-label="navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a onClick={onPrevPage} className="page-link" href="#" tabIndex="-1"> &laquo; </a>
        </li>
        <li className="page-item">
          <a onClick={onNextPage} className="page-link" href="#"> &raquo; </a>
        </li>
      </ul>
    </nav>
  </div>
)

export default Pagination
