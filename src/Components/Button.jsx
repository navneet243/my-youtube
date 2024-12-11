import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='mx-2 mt-2 px-2 py-1 border border-gray-200 bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button