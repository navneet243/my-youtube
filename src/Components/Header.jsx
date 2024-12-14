import React, { useState, useEffect } from 'react'
import logo from '../Assets/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiSearch } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../redux/appSlice'
import { YOUTUBE_SUGGESTION_API_URL } from '../constants'
import { cacheResult } from '../redux/searchSlice'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search)

  const dispatch = useDispatch();

  useEffect(()=>{
    //debouncing 
    const timer = setTimeout(()=> {
      if(searchCache[searchQuery]){
        setSuggestion(searchCache[searchQuery])
      }else{
        getSuggestion()
      }
    },200);
    return () => {
      clearTimeout(timer);
    }
  },[searchQuery])

  const getSuggestion = async () => {
    // console.log("api call-" + searchQuery)
    try{
      const response = await fetch(YOUTUBE_SUGGESTION_API_URL+ searchQuery);
      const data = await response.json();
      // console.log(data);
      setSuggestion(data[1]);
  
      dispatch(cacheResult({
        [searchQuery]: data[1]
      }))
    }catch(err){
      console.log(err);
    }
  }

  const handleMenuToggle = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className='grid grid-flow-col shadow-lg m-2 p-2'>
        <div className='flex col-span-1 cursor-pointer'> 
            <GiHamburgerMenu className='h-8 w-8 ml-3 ' onClick={()=>handleMenuToggle()}/>
            <img className='w-24 h-8 ml-6 p-0.5' src={logo}/>
        </div>
        <div className='col-span-10 ml-24'>
          <div className='flex'>
            <input className='border border-gray-400 rounded-l-2xl w-1/2 pl-5' 
              type='text' 
              value={searchQuery}
              onChange={(e)=> setSearchQuery(e.target.value)}
              onFocus={(e)=> setShowSuggestion(true)}
              onBlur={(e)=> setShowSuggestion(false)}
            />
            <BiSearch className='border border-gray-400 bg-gray-200 h-8 mr-4 w-16 p-1 rounded-r-2xl'/>
          </div>
          {
            showSuggestion && 
            <div className='fixed bg-slate-50 rounded-md w-[31.5rem] shadow-md'>
              <ul className='m-1 px-3'>
                {
                  suggestion.map((suggestion,index) => {
                    return <li className='hover:bg-gray-300 hover:rounded-md px-2 cursor-pointer' key={index}>{suggestion}</li>
                  })
                }
              </ul>
            </div>
          }
        </div>
        <div className='col-span-1'>
            <FaUser className='h-8'/>
        </div>
    </div>
  )
}

export default Header