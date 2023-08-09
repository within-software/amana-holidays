import React, { useEffect, useState } from 'react'
import './HoneymoonDetails.scss'
import useFetch from "../../hooks/useFetch"
import { useParams } from 'react-router-dom';
import config from '../../config.js';


const HoneymoonDetails = () => {
    const id = useParams().id;
    const [quantity, setQuantity] = useState(1);
    const [selectedImg, setSelectedImg] = useState("img1");

    const uploadUrl = config.UPLOAD_URL;

    // Fetch Images 
    const {data, loading, error} = useFetch(`/hotels/${id}?populate=*`);

    // WhatsApp Request
    const handleRequestDecoration = () => {
      const message = 'I would like to request decoration for my honeymoon.';
      const phoneNumber = 'YOUR_WHATSAPP_NUMBER_WITH_COUNTRY_CODE';
      const whatsappLink = `https://api.whatsapp.com/send?phone=${+628111454511}&text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappLink, '_blank');
    };
  return (
    <div className='honeymoonDetails'>
      <div className='honeymoonDetails-container'>
        {loading? "loading" : (<><div className='honeymoonDetails-left'>
            <div className='h-imagesContainer'>
              <img 
                onClick={(e) => setSelectedImg("img1")} 
                src={uploadUrl + data?.attributes?.img1?.data?.attributes?.url} 
                alt=''
              />
              <img 
                onClick={(e) => setSelectedImg("img2")} 
                src={uploadUrl + data?.attributes?.img2?.data?.attributes?.url} 
                alt=''
              />
              <img 
                onClick={(e) => setSelectedImg("img2")} 
                src={uploadUrl + data?.attributes?.img2?.data?.attributes?.url} 
                alt=''
              />
              <img 
                onClick={(e) => setSelectedImg("img2")} 
                src={uploadUrl + data?.attributes?.img2?.data?.attributes?.url} 
                alt=''
              />
            </div>
            <div className='h-mainImage'>
              <img src={uploadUrl + data?.attributes[selectedImg]?.data?.attributes?.url} alt='' />
            </div>
        </div>
        <div className='honeymoonDetails-right'>
            <h1>{data?.attributes?.name}</h1>
            <div className='freeDecoration'>
              <h2>Free Decoration</h2>
              <p>{data?.attributes?.free}</p>
            </div>
            <div className='paidDecoration'>
              <h2>Paid Decoration</h2>
              <p>{data?.attributes?.paid}</p>
            </div>
            <button onClick={handleRequestDecoration}>Request Decoration</button>
        </div>
        </>)}
      </div>
    </div>
  )
}

export default HoneymoonDetails