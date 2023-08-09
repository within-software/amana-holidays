import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSnapchat, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container1">
          <img src='/amanholidays.png'/>
          <div className='socialMedia'>
            <FontAwesomeIcon className="icon" icon={faFacebook}/>
            <FontAwesomeIcon className="icon" icon={faTwitter}/>
            <FontAwesomeIcon className="icon" icon={faYoutube}/>
            <FontAwesomeIcon className="icon" icon={faSnapchat}/>
            <FontAwesomeIcon className="icon" icon={faWhatsapp}/>
          </div>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className='f-container3-headText'>Holidays</span>
            <span className='f-container3-listText'>Honeymoon</span>
            <span className='f-container3-listText'>Family</span>
            <span className='f-container3-listText'>Individuals</span>
            <span className='f-container3-listText'>Groups</span>
          </div>
          <div className="footer-container3">
            <span className='f-container3-headText'>Destinations</span>
            <span className='f-container3-listText'>Malaysia</span>
            <span className='f-container3-listText'>Thailand</span>
            <span className='f-container3-listText' >Indonesia</span>
            <span className='f-container3-listText' >Maldives</span>
            <span className='f-container3-listText' >Sri Lanka</span>
          </div>
          <div className="footer-container3">
            <span className='f-container3-headText'>Company</span>
            <span className='f-container3-listText'>About Us</span>
            <span className='f-container3-listText'>Contact Us</span>
            <span className='f-container3-listText'>FAQs</span>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <span><strong>© 2023 Developed By Within Software. All Rights Reserved.</strong></span>
      </div>
    </div>
  )
}

export default Footer