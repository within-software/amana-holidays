import React from 'react'
import './Card.scss'
import {Link} from "react-router-dom"
import config from '../../config.js';
const Card = ({item, countryName}) => {


  // Use the variables from the config.js file
  const uploadUrl = config.UPLOAD_URL;
  
  return (
      <div className='card'>
        <div className='cardRight'>
          <div className='card-image'>
            {item?.attributes.isNew && <span>New Season</span>}
            <img src={uploadUrl  + item.attributes.img.data.attributes.url} alt=''/>
          </div>
        </div>
        <div className='cardLeftWrapper'>
          <div className='clw-left'>
            <h1>{item?.attributes.name}</h1>
            <span>{item?.attributes.location}</span>
            <p>{item?.attributes.desc}</p>
          </div>
          <div className='clw-right'>
            <div className='clw-r-top'>
              <span>Starting Price</span>
              <h3>{item?.attributes.lowPrice} SAR</h3>
            </div>
            <div className='clw-r-bottom'>
              <Link to={`/honeymoon/${countryName}/${item.id}`}>
                <button>Check Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card