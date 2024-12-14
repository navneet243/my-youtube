import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {YOUTUBE_API_URL} from '../constants'
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const[video, setVideo] = useState([]);

  useEffect(() => {
    getVideos();
  },[])

  const getVideos = async () => {
    try{
      const response = await fetch(YOUTUBE_API_URL);
      const data= await response.json();
      // console.log(data);
      setVideo(data.items);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='m-3 flex flex-wrap gap-4 box-border'>
      {
        video.map((item) => {
          return (
          <Link to={'/watch/?v='+ item.id} key={item.id}>
            <VideoCard info={item}/>
          </Link>)
        })
      }
    </div>
  )
}

export default VideoContainer