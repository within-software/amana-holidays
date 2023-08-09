import React from 'react'
import Header from '../../components/header/Header'
import './Home.scss'
import FeaturedOne from '../../components/featuredOne/FeaturedOne'
import FeaturedTwo from '../../components/featuredTwo/FeaturedTwo'
import AboutUs from '../../components/aboutUs/AboutUs'
import Destination from '../../components/destinations/destination'

const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
          <Header/>
          <FeaturedOne/>
          <Destination/>
          <AboutUs/>
        </div>
    </div>
  )
}

export default Home