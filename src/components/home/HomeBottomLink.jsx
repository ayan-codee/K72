import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomLink = () => {
  return (
    <div className='flex items-center justify-center gap-[1vw]'>
        <Link className='hover:text-[#d3fd50] hover:border-[#d3fd50] transition duration-300 font-[font2] lg:leading-[5vw] leading-none pt-1 lg:pt-5 md:pt-3 px-3 lg:px-6 py-0 border-3 border-white uppercase rounded-full text-[9vw] lg:text-[6.8vw]'  to='/projects'>works</Link>
        <Link className='hover:text-[#d3fd50] hover:border-[#d3fd50] transition duration-300 font-[font2]  lg:leading-[5vw] leading-none  pt-1 lg:pt-5 lg:px-6 px-3 md:pt-3  py-0 border-3 border-white uppercase rounded-full text-[9vw] lg:text-[6.8vw]' to='/agence'>agency</Link>
    </div>
  )
}

export default HomeBottomLink