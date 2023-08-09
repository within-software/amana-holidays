import React from 'react'
import './FeaturedTwo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot, faStar} from '@fortawesome/free-solid-svg-icons';
import { featuredPackages } from './FeaturedTwoData';

const FeaturedTwo = () => {
    const starArray = Array.from({ length: 5 }, (_, index) => (
        <FontAwesomeIcon className="icon" icon={faStar} key={index} />
    ));

  return (
    <div className='featuredTwo'>
      <div className='container'>
        <h1><strong>PACKAGES</strong></h1>
        <p>Explore Our Customizable Packages</p>
        <div className='packagesWrapper'>
            {featuredPackages.map((packageItem) => (
                <div className='packageItem' key={packageItem.id}>
                    <div className='packageItemUpperPart'>
                        <img src={packageItem.img} alt={packageItem.country}/>
                    </div>
                    <div className='packageItemLowerPart'>
                        <div className='packageLocation'>
                            <FontAwesomeIcon className="icon" icon={faLocationDot}/>
                            <span><strong>{packageItem.country}</strong></span>
                        </div>
                        <p>{packageItem.desc}</p>
                        <div className='packageRating'>
                            {starArray}
                        </div>
                        <div className='packagePrice'>
                            <span><strong>{packageItem.price}</strong></span>
                            <button>Book Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <button>See More Packages</button>
      </div>
    </div>
  )
}

export default FeaturedTwo