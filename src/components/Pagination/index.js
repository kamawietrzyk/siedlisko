import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const Pagination = ({ onChange, currentPage, totalPages }) => (
  <div className="Pagination">
    <nav aria-label="navigation">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
          <a onClick={onChange('prev')} className="page-link" href="#"><FontAwesomeIcon icon={faAngleDoubleLeft} className="pr-1"/></a>
        </li>
        <li className={`page-item ml-1 ${currentPage === totalPages && 'disabled'}`}>
          <a onClick={onChange('next')} className="page-link" href="#"><FontAwesomeIcon icon={faAngleDoubleRight} className="pr-1"/> </a>
        </li>
      </ul>
    </nav>
  </div>
)

export default Pagination
