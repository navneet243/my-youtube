import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => { 
  const isMenuOpen =useSelector((store) => store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className='pl-5 mt-2 w-48 shadow-lg'>
        <ul className='text-md mb-3'>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscription</li>
        </ul>
        <h1 className='font-bold border-t-2 pt-3'>You </h1>
        <ul className='text-md mb-3'>
            <li>History</li>
            <li>Playlists</li>
            <li>Your Videos</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
        </ul>
        <h1 className='font-bold mb-3 border-t-2 pt-3'>Subsciptions </h1>
        <h1 className='font-bold pt-5 border-t-2'>Explore </h1>
        <ul className='text-md mb-3'>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>Sports</li>
            <li>Courses</li>
            <li>Fashion Beauty</li>
            <li>Podcasts</li>
        </ul>
        <ul className='text-md border-t-2 mb-3 pt-3'>
            <li>Setting</li>
            <li>Report History</li>
            <li>Help</li>
            <li>Send Feedback</li>
        </ul>

    </div>
  )
}

export default SideBar