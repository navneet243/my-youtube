import React from 'react'
import logo from '../Assets/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiSearch } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../redux/appSlice'

const Header = () => {
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className='grid grid-flow-col shadow-lg m-2 p-2'>
        <div className='flex col-span-1 cursor-pointer'> 
            <GiHamburgerMenu className='h-8 w-8 ml-3 ' onClick={()=>handleMenuToggle()}/>
            <img className='w-24 h-8 ml-6 p-0.5' src={logo}/>
        </div>
        <div className='flex col-span-10 ml-24'>
            <input className='border border-gray-400 rounded-l-2xl w-1/2 pl-2' type='text'/>
            <BiSearch className='border border-gray-400 bg-gray-200 h-8 mr-4 w-16 p-1 rounded-r-2xl'/>
        </div>
        <div className='col-span-1'>
            <FaUser className='h-8'/>
        </div>
    </div>
  )
}

export default Header