import React from 'react'
import kontakt from './kontakt.jpg'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhoneSquareAlt, faAt } from '@fortawesome/free-solid-svg-icons'

const Contact = () => (
  <>
    <div>
      <img src={kontakt} alt="contact pic" width="100%" />
    </div>
    <div className="Contact">
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

      <h1 className="text-center pt-4">Napisz do nas!</h1>
      <div>
        <form className="Contact__form">
          <div className="form-group">
            <label htmlFor="name-input">Imię</label>
            <input type="name" className="form-control" placeholder="Imię" required />
          </div>
          <div className="form-group">
            <label htmlFor="surname-input">Nazwisko</label>
            <input type="surname" className="form-control" placeholder="Nazwisko" />
          </div>
          <div className="form-group">
            <label htmlFor="email-input">E-mail</label>
            <input type="email" className="form-control" placeholder="janek@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Twoja wiadomość</label>
            <textarea className="form-control" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-outline-dark">Wyślij</button>
        </form>
      </div>
    </div>
  </>
)

export default Contact
