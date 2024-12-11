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
    const response = await fetch(YOUTUBE_API_URL);
    const data= await response.json();
    // console.log(data);
    setVideo(data.items);
  }

  console.log(video);

  return (
    <div className='m-3 flex flex-wrap gap-4 box-border'>
      {/* <VideoCard info={video[4]}/>
      <VideoCard info={video[2]}/>
      <VideoCard info={video[7]}/>
      <VideoCard info={video[5]}/>
      <VideoCard info={video[8]}/> */}
      {
        video.map((item) => {
          return (
          <Link to={'/watch/?v='+ item.id}>
            <VideoCard key={item.id} info={item}/>
          </Link>)
        })
      }
    </div>
  )
}

export default VideoContainer