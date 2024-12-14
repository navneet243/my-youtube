import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = [
    "All",
    "Sports",
    "Music",
    "Gaming",
    "Kids",
    "Education",
    "React",
    "Cpp",
    "Badminton",
    "Poetry",
    "Studio"
  ]

  return (
    <div className='flex mx-3' >
      {
        list.map((item) => {
          return (<Button name={item} key={item.toString()}/>)
        })
      }
    </div> 

  )
}

export default ButtonList