import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from '../redux/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from '../Components/CommentsContainer'

const Watch = () => {

  const [searchParams] = useSearchParams();
  const videoId=searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(closeMenu())
  },[])

  return (
    <div>
      <div className='m-5'>
        <iframe 
          width="996" 
          height="560" 
          src={"https://www.youtube.com/embed/"+ videoId}
          title="Youtube video player" 
          // frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        >
        </iframe>
      </div>
      <div className='m-5'>
        <CommentsContainer/>
      </div>
    </div>
  )
}

export default Watch