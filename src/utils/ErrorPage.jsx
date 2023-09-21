import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='text-red-500 text-6xl font-raleway text-center font-semibold h-dvh lg:h-screen flex flex-col justify-center items-center mt-10 lg:mt-0'>
      ⚒️😿Oops! Something went wrong.
      <NavLink to={"/"} className="font-lexend text-2xl mt-10 text-blue-500 font-normal underline">Take me back</NavLink>
    </div>
  )
}

export default ErrorPage
