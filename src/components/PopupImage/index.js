import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const PopupImage = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <img
        className="PopupImage__small"
        src={src}
        onClick={() => setIsOpen(!isOpen) }
        alt={alt}
      />
      {isOpen && (
        <div className="PopupImage__dialog">
          <div className="PopupImage__image">
            <img src={src} alt={alt} />
          </div>
          <FontAwesomeIcon className="PopupImage__icon" icon={faTimes} size="2x" onClick={() => setIsOpen(!isOpen) } />
        </div>
      )}
    </div>
  )
}

export default PopupImage
