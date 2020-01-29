import React from 'react'
import kontakt from './kontakt.jpg'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhoneSquareAlt, faAt } from '@fortawesome/free-solid-svg-icons'

const Contact = () => (
  <>
    <img src={kontakt} alt="contact pic" width="100%" />
    <div className="Contact">
      <h1 className="text-center pt-4 mt-5 mb-0">Odezwij się do nas!</h1>
      <div className="Contact__details">
        <div>
          <h2><FontAwesomeIcon icon={faHome} /> Adres</h2>
          <p>Siedlisko Góra Wiatrów <br/> 32-855 Gwoździec</p>
        </div>
        <div>
          <h2><FontAwesomeIcon icon={faPhoneSquareAlt} /> Telefon</h2>
          <p>Tomek Wietrzyk <br/> (+48) 690-005-927</p>
        </div>
        <div>
          <h2><FontAwesomeIcon icon={faAt} /> Email</h2>
          <p>Kama Swoboda-Wietrzyk <br/> kama@wietrzyk.com</p>
        </div>
      </div>
    </div>
  </>
)

export default Contact
