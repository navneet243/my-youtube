import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error= useRouteError();
  return (
    <div className='mt-15'>
        <h1 className='text-3xl m-5'>Oops... Something went Wrong...</h1>
        <h2 className='text-xl m-5'>{error.status + " : " + error.statusText}</h2>
    </div>
  )
}

export default Error