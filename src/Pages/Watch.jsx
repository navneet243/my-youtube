import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from '../redux/appSlice'
import { useSearchParams } from 'react-router-dom'

const Watch = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(closeMenu())
  },[])

  return (
    <div className='m-5'>
      <iframe 
        width="996" 
        height="560" 
        src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
        title="INDIA&#39;S GOT LATENT | EP 11 ft.@bhartitv @LifeOfLimbachiyaas @TonyKakkar" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      >
      </iframe>
    </div>
  )
}

export default Watch