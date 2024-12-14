import React from 'react'
import { formatViewCount } from '../Utils/helper';

const VideoCard = ({info}) => {
  const {snippet, statistics,} = info;
  const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='m-2 rounded-lg w-72 h-74 shadow-md'>
        <img  className='rounded-2xl py-2' alt='thumbnail' src={thumbnails?.high?.url}/>
        <h1 className='text-md font-semibold ml-2 overflow-hidden'>{title.slice(0,60)}...</h1>
        <h1 className='text-xs py-1 ml-2'>{channelTitle}</h1>
        <h1 className='text-xs ml-2'>{formatViewCount(statistics?.viewCount)}</h1>
    </div>
  )
}

export default VideoCard