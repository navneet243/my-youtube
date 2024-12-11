import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics,} = info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='m-1 rounded-lg w-72 shadow-md'>
        <img  className='rounded-2xl py-2' alt='thumbnail' src={thumbnails.high.url}/>
        <h1 className='text-md font-semibold'>{title.slice(0,60)}...</h1>
        <h1 className='text-xs py-1'>{channelTitle}</h1>
        <h1 className='text-xs'>{statistics.viewCount/100}K Views</h1>
    </div>
  )
}

export default VideoCard