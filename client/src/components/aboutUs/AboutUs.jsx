import React from 'react'
import './AboutUs.scss'

const AboutUs = () => {
  return (
    <div className='aboutUs'>
        <div className='container'>
            <div className='left'>
                <h1>ABOUT US</h1>
                <p>
                    Amana Holidays is a leading B2B packages supplier for travel agents in the Middle East, serving clients in Saudi Arabia, United Arab Emirates, and Oman. we have been providing customized travel solutions to our clients. 
                </p>
            </div>
            <div className='right'>
                <iframe className='aboutUsVideo' src="https://www.youtube.com/embed/LUuhsQH3yYo" title="All Arab tourist needs in (Southeast Asia)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default AboutUs