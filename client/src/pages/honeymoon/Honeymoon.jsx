import React, { useState } from 'react'
import './Honeymoon.scss'
import List from '../../components/list/List'
import { useParams } from 'react-router-dom'
import useFetch from "../../hooks/useFetch"

const Honeymoon = () => {
    const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    const { countryName } = useParams();
    const capitalizedCountryName = capitalizeFirstLetter(countryName);
    const [clickedCity, setClickedCity] = useState()
    const {data, loading, error} = useFetch(`/cities?[filters][countries][name][$eq]=${capitalizedCountryName}`);

    const handleChangeCity = (cityName) => {
        setClickedCity(cityName);
    };
  return (
    <div className='honeymoon'>
      <div className='honeymoon-container'>
        <div className='honeymoon-leftSide'>
            <div className='h-leftSideItem'>
                <h2>{countryName}</h2>
                <h3>Select City:</h3>
                {error? "Something went wrong!" : (loading? "Loading" : data?.map((item)=>(
                    <div className='h-lsi-input' key={item.id}>
                        <span id={item.id} onClick={() => handleChangeCity(item.attributes.name)}>
                            {item.attributes.name}
                        </span>
                    </div>
                )))}
            </div>
        </div>
        <div className='honeymoon-rightSide'>
            <img
            className="honeymoonMainCoverImg"
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            />
            <List clickedCity={clickedCity} countryName={capitalizedCountryName}/>
        </div>
      </div>
    </div>
  )
}

export default Honeymoon