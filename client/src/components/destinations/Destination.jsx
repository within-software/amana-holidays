import React from 'react'
import './Destination.scss'
import { Link } from "react-router-dom";

const Destination = () => {
  return (
    <div className='destination'>
        <div className='destination-container'>
            <div className='col'>
                <div className='row'>
                    <img
                        src="https://images.pexels.com/photos/5904675/pexels-photo-5904675.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                    />
                    <button className='cat-button'>
                        <Link className="link" to="/">
                         Malaysia
                        </Link>
                    </button>
                </div>
                <div className='row'>
                    <img
                        src="https://images.pexels.com/photos/3544415/pexels-photo-3544415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <button className='cat-button'>
                        <Link to="/" className="link">
                        Singapore
                        </Link>
                    </button>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <img
                        src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <button className='cat-button'>
                        <Link to="/" className="link">
                         Indonesia
                        </Link>
                    </button>
                </div>
            </div>
            <div className='col col-l'>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <img
                                src="https://images.pexels.com/photos/3601450/pexels-photo-3601450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                            />
                            <button className='cat-button'>
                                <Link to="/" className="link">
                                 Maldives
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <img
                                src="https://images.pexels.com/photos/7415730/pexels-photo-7415730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                            />
                            <button className='cat-button'>
                                <Link to="/" className="link">
                                Sri Lanka
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <img
                        src="https://images.pexels.com/photos/4070509/pexels-photo-4070509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <button className='cat-button'>
                        <Link to="/" className="link">
                         Thailand
                        </Link>
                    </button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Destination