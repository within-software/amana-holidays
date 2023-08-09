import React from 'react'
import './FeaturedOne.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBoxOpen, faCar, faHeadphonesSimple, faHotel, faMountainCity, faMountainSun, faPlaneDeparture} from '@fortawesome/free-solid-svg-icons';


const FeaturedOne = () => {
  return (
    <div className='featuredOne'>
      <div className='container'>
        <h1>Why Work With Us</h1>
        <p>By working with us, you can trust that your travel experience will be seamless and stress-free. We offer personalized travel itineraries and exceptional customer service, ensuring that every aspect of your trip is taken care of. Our team of knowledgeable travel experts is dedicated to making your travel dreams a reality</p>
        <div className='servicesWrapper'>
          <div className='serviceItem'>
            <div className='serviceItemUpperPart'>
            <FontAwesomeIcon className="icon" icon={faPlaneDeparture}/>
            </div>
            <div className='serviceItemLowerPart'>
              <span><strong>Flight Tickets</strong></span>
              <p>We provide you with Domestic and International flight tickets at competitive prices</p>
            </div>
          </div>
          <div className='serviceItem'>
            <div className='serviceItemUpperPart'>
              <FontAwesomeIcon className="icon" icon={faMountainCity}/>
            </div>
            <div className='serviceItemLowerPart'>
              <span><strong>Tourism Tours</strong></span>
              <p>We choose for you the best destinations and places you can visit</p>
            </div>
          </div>
          <div className='serviceItem'>
            <div className='serviceItemUpperPart'>
              <FontAwesomeIcon className="icon" icon={faBoxOpen}/>
            </div>
            <div className='serviceItemLowerPart'>
              <span><strong>Tourism Packages</strong></span>
              <p>Explore our customisable packages that includes everything you need in your journy</p>
            </div>
          </div>
          <div className='serviceItem'>
            <div className='serviceItemUpperPart'>
              <FontAwesomeIcon className="icon" icon={faHeadphonesSimple}/>
            </div>
            <div className='serviceItemLowerPart'>
              <span><strong>24/7 Customer Support</strong></span>
              <p>Our team working all day all night in many countries to help whatever you need</p>
            </div>
          </div>
          <div className='serviceItem'>
            <div className='serviceItemUpperPart'>
              <FontAwesomeIcon className="icon" icon={faCar}/>
            </div>
            <div className='serviceItemLowerPart'>
              <span><strong>Transportation</strong></span>
              <p>We provide you with transfers and also private cars</p>
            </div>
          </div>
          <div className='serviceItem'>
            <div className='serviceItemUpperPart'>
              <FontAwesomeIcon className="icon" icon={faHotel}/>
            </div>
            <div className='serviceItemLowerPart'>
              <span><strong>Hotel Bookings</strong></span>
              <p>Simply, we guarantee you the best price for hotels</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedOne