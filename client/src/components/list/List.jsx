import React, { useEffect, useState } from 'react'
import './List.scss'
import Card from '../card/Card'
import useFetch from "../../hooks/useFetch"

const List = ({clickedCity, countryName}) => {
  const { data, loading, error } = useFetch(
    clickedCity
      ? `/hotels?populate=*&[filters][countries][name]=${countryName}&[filters][cities][name][$eq]=${clickedCity}`
      : `/hotels?populate=*&[filters][countries][name]=${countryName}`
  );
  console.log(data)

  return (
    <div className='list'>
        {loading? "Loading ..." : data?.map((item)=>
            <Card item={item} key={item.id} countryName={countryName}/>
        )}
    </div>
  )
}

export default List
